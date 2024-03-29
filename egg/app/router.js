'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/register', controller.home.register);
  router.get('/update', controller.home.update);
  router.get('/del', controller.home.Del);
};
