'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;

    ctx.body = 'Hello World';
  }
}
// 为类的时候的处理
module.exports = HomeController;
