'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log('app', app)
  router.get('/', controller.home.index);
};

// 处理异步和回调的写法
// async function 和await
