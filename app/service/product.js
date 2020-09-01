const service = require('egg').Service
class ProductService extends service {
  async deleteList () {
      return {
          errno: 0,
          message: '删除菜单成功'
      }
  }
}
module.exports = ProductService