'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const deleteCB = await ctx.service.product.deleteList()
    // ctx.body = deleteCb
    await ctx.render('index.html', {
      deleteCB,
      arr: ['a', 'b', 'c']
    })
  }
}

module.exports = HomeController;
