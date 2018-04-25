'use strict';
const Controller = require('egg').Controller;
class FooController extends Controller {
  async render() {
    const ctx = this.ctx;
    console.log('this', this)
    ctx.body = 'Hello foo';
  }
}

module.exports = FooController;
