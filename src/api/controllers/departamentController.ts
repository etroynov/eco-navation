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
  const Departaments = await Departament.find().sort({ createAt: -1 });

  return await ctx.render('dashboard/Departament/index', { Departaments });
};

export const show = async (ctx: any) => {
  const slug = ctx.params.slug;
  const Departament = await Departament.findOne({ slug });

  return await ctx.render('site/Departament/show', { Departament });
};

export const create = async (ctx: any) => await ctx.render('dashboard/Departament/create');

export const edit = async (ctx: any) => {
  const { id } = ctx.params;
  const Departament = await Departament.findOne({ _id: id });

  await ctx.render('dashboard/Departament/edit', { Departament });
};

export const store  = async (ctx: any) => {
  await Departament.create(ctx.request.body.fields);

  return await ctx.redirect('/dashboard/Departaments');
};

export const update = async (ctx: any) => {
  const { fields } = ctx.request.body;
  const { id } = fields;

  await Departament.findOneAndUpdate({ _id: id }, fields);

  return await ctx.redirect('/dashboard/Departaments');
};

export const destroy = async (ctx: any) => {
  const { id } = ctx.params;
  await Departament.findByIdAndRemove(id);

  return await ctx.redirect('/dashboard/Departaments');
};
