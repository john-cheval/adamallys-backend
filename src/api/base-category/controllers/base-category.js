"use strict";

/**
 * base-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::base-category.base-category');
module.exports = createCoreController(
  "api::base-category.base-category",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
