/**
 * Dashboard controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle home ( CRUD and etc )
 *
 * Dependencies
 */

import Post from '../models/Post';

/**
 * Display home page
 */

export const index = async (ctx: any) => {
  const posts = await Post.find();
  ctx.body = { posts };

  return await ctx;
};
