'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // Controller 调用Service
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
