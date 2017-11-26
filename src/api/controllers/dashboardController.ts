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

  return await ctx.render('dashboard/home/index', {
    posts,
    title: 'Node Express Mongoose Boilerplate',
  });
};
