"use node";
import OpenAI from "openai";
import { action } from "./_generated/server";
import { api } from "./_generated/api";

export const chat = action(async (ctx, { body }) => {
  const { messages, botMessageId } = await ctx.runMutation(api.messages.send, {
    body,
  });
  const fail = async (reason) => {
    throw new Error(reason);
  };

  // Grab the API key from environment variables
  // Specify this in your dashboard: `npx convex dashboard`
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    await fail("Add your OPENAI_API_KEY as an env variable");
  }
  const openai = new OpenAI({
    apiKey: apiKey,
  });
  const openaiResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "System",
        content:
          "Provide me 3 recipe ideas based on the ingredient suggestions and restrictions said by the user. Only list the recipe names. Do not show the ingredients needed or the instructions for cooking/baking.",
      },
      {
        role: "User",
        content:
          "My ingredient suggestions: carrots, flour, sugar. My ingredient restrictions: None",
      },
    ],
    // stream: true,
  });

  if (openaiResponse.choices.length === 0) {
    await fail("No response");
  }
  await ctx.runMutation(api.messages.update, {
    messageId: botMessageId,
    patch: {
      body: openaiResponse.choices[0].message.content,
      // Track how many tokens we're using for various messages
      usage: openaiResponse.usage,
      updatedAt: Date.now(),
      // How long it took OpenAI
    },
  });
  const res = openaiResponse.choices[0].message.content;
  console.log("Response: " + res);
});
