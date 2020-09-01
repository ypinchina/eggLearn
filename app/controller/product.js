const Controller = require('egg').Controller
class ProductController extends Controller {
  async index() {
      const { ctx } = this
      ctx.body = 'product'
  }
  async detail() {
      const { ctx } = this
      ctx.body = `id = ${ctx.query.id}`
 }
 async detail2() {
     const { ctx } = this
     ctx.body = `id = ${ctx.params.id}`
 }
 async create() {
     //post方法模拟学习
     const { ctx } = this
     const { name, password } = ctx.request.body
     ctx.body = { name , password }
 }
 async update() {
    //put方法介绍 用于更新服务器的数据
    const { ctx } = this
    const name = ctx.params.name
    console.log(name)
    ctx.body = `name = ${name}`
 }
 async delete() {
    const { ctx } = this
    const deleteCallback = await ctx.service.product.deleteList()
    ctx.body = deleteCallback 
 }
}
module.exports = ProductController