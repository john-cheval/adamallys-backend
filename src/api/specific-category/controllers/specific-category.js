"use strict";

/**
 * specific-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::specific-category.specific-category');
module.exports = createCoreController(
  "api::specific-category.specific-category",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
