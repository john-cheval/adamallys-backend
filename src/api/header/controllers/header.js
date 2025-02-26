"use strict";

/**
 * header controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::header.header');
module.exports = createCoreController("api::header.header", ({ strapi }) => ({
  async find(ctx) {
    ctx.query._cache = true;
    return await super.find(ctx);
  },
}));
