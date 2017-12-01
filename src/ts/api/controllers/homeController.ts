/**
 * Home controller
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
  const posts: any = await Post.find();

  return await ctx.render('site/home/index', {
    posts,
    title: 'Node Express Mongoose Boilerplate',
  });
};
