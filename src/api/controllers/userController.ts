/**
 * User controller
 *
 * @module       :: controller
 * @description  :: keep logic for handle user ( CRUD and etc )
 *
 *
 * Display user page
 */

exports.index = (ctx: any) => ctx.render('home/index', { title: '' });
