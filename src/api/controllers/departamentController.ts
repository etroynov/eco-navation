/**
 * Departament controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle Departament ( CRUD and etc )
 *
 * Dependencies
 */

import Departament from '../models/Departament';

/**
 * Display Departaments list
 */

export const index = async (ctx: any) => {
  const departaments = await Departament.find().sort({ createAt: -1 });
  ctx.body = departaments;

  return await ctx;
};

export const show = async (ctx: any) => {
  const slug = ctx.params.slug;
  const departament = await Departament.findOne({ slug });

  ctx.body = departament;

  return await ctx;
};

export const create = async (ctx: any) => {
  console.info(ctx.request);
  // try {
  //   await Departament.create(ctx.request.body.fields);
  //   ctx.body = { status: 'done' };
  // } catch (e) {
  //   ctx.body = e;
  // }
  ctx.body = ctx.request;


  return await ctx;
};

export const update = async (ctx: any) => {
  const { fields } = ctx.request.body;
  const { id } = fields;

  await Departament.findOneAndUpdate({ _id: id }, fields);
  ctx.body = { status: 'done' };

  return await ctx;
};

export const destroy = async (ctx: any) => {
  const { id } = ctx.params;
  await Departament.findByIdAndRemove(id);

  ctx.body = { status: 'done' };
  return await ctx;
};
