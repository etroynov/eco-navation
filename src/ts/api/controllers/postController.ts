/**
 * Post controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle post ( CRUD and etc )
 *
 * Dependencies
 */

import Post from '../models/Post';

/**
 * Display posts list
 */

export const index = async (ctx: any) => {
  const posts = await Post.find().sort({ createAt: -1 });
  ctx.body =  { posts };

  return await ctx;
};

export const show = async (ctx: any) => {
  const slug = ctx.params.slug;
  const post = await Post.findOne({ slug });
  ctx.body =  { post };

  return await ctx;
};

export const store  = async (ctx: any) => {
  await Post.create(ctx.request.body.fields);

  return await ctx.redirect('/dashboard/posts');
};

export const update = async (ctx: any) => {
  const { fields } = ctx.request.body;
  const { id } = fields;

  await Post.findOneAndUpdate({ _id: id }, fields);

  return await ctx.redirect('/dashboard/posts');
};

export const destroy = async (ctx: any) => {
  const { id } = ctx.params;
  await Post.findByIdAndRemove(id);

  return await ctx.redirect('/dashboard/posts');
};