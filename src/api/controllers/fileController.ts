/**
 * File controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle File ( CRUD and etc )
 *
 * Dependencies
 */

import File from '../models/File';

/**
 * Display files list
 */

export const index = async (ctx: any) => {
  const files = await File.find().sort({ createAt: -1 });
  ctx.body = {
    files,
    code: 200,
  };

  return await ctx; 
};

export const add = async (ctx: any) => await ctx.render('dashboard/file/add');

export const upload = async (ctx: any) => {
  // const { files, fields } = ctx.request.body;
  // const { id } = fields;
  // const file = await File.findOneAndUpdate({ _id: id }, fields);

  return await ctx.redirect('/dashboard/files');
};

export const destroy = async (ctx: any) => {
  // const { id } = ctx.params;
  // const file = await File.findByIdAndRemove(id);

  return await ctx.redirect('/dashboard/files');
};
