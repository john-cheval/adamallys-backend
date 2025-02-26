"use strict";

/**
 * port controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::port.port');
module.exports = createCoreController("api::port.port", ({ strapi }) => ({
  async find(ctx) {
    ctx.query._cache = true;
    return await super.find(ctx);
  },
}));
