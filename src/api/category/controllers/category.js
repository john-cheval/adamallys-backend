"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::category.category');
module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
