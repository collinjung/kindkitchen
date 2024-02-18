// convex/messages.ts
import { query, mutation, internalMutation } from "./_generated/server";

export const list = query(async (ctx) => {
  return await ctx.db.query("messages").collect();
});

// An `internalMutation` can only be called from other server functions.
export const update = internalMutation(async (ctx, { messageId, patch }) => {
  await ctx.db.patch(messageId, patch);
});

export const send = mutation(async (ctx, { body }) => {
  await ctx.db.insert("messages", {
    body,
    author: "user",
  });
  const botMessageId = await ctx.db.insert("messages", {
    author: "system",
  });
  const messages = await ctx.db
    .query("messages")
    .order("desc")
    .filter((q) => q.neq(q.field("body"), undefined))
    .take(21);
  messages.reverse();
  return { messages, botMessageId };
});
