"use strict";

/**
 * sustainability-at-adamallys-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::sustainability-at-adamallys-page.sustainability-at-adamallys-page');
module.exports = createCoreController(
  "api::sustainability-at-adamallys-page.sustainability-at-adamallys-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
