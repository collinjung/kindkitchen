import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("UserPlates").collect();
  },
});

export const addPlate = mutation({
  args: {
    foodName: v.string(),
    ingredients: v.array(v.string()),
    description: v.string(),
    tags: v.array(v.string()),
    provider: v.string(),
    date: v.string(),
    time: v.string(),
    image: v.string(),
  },
  handler: async (
    ctx,
    { foodName, ingredients, description, tags, date, time, provider, image }
  ) => {
    // Use the insert method to add the data to your table
    const insertedPlate = await ctx.db.insert("UserPlates", {
      foodName,
      ingredients,
      description,
      date,
      time,
      tags,
      provider,
      image,
    });
    return insertedPlate; // You can return the inserted data itself
  },
});
