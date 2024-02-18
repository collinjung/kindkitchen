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
        role: "system",
        content:
          "You are an assistant tasked with providing recipes and cooking/baking instructions based on the user's input. Provide  3 recipe ideas based on the ingredient suggestions and restrictions said by the user. Only list the recipe names. Do not show the ingredients needed or the instructions for cooking/baking. When given preferences or restrictions, give your output in this format: `Based on your preferences and restrictions, here are 3 recipe suggestions for you!: \n(1) {Recipe Name 1} \n(2){Recipe Name 2} \n(3){Recipe Name 3}. If any of these sound good, please give me the corresponding number and I will give you a more detailed recipe! Otherwise, feel free to ask me about any other recipe!`. Only answer using this format when given preferences and restrictions, otherwise act as an assistant answering questions or commands by the user. If the user chooses a number from one of the recipe suggestions, give a full ingredient list, and instructions on how to make that recipe.",
      },
      ...messages.map(({ body, author }) => ({
        role: author,
        content: body,
      })),
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
