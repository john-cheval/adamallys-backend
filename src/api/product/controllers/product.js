"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::product.product');
module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    ctx.query._cache = true;
    return await super.find(ctx);
  },
}));
