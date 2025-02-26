"use strict";

/**
 * secondary-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::secondary-category.secondary-category');
module.exports = createCoreController(
  "api::secondary-category.secondary-category",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
