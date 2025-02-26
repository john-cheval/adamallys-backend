"use strict";

/**
 * footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::footer.footer');
module.exports = createCoreController("api::footer.footer", ({ strapi }) => ({
  async find(ctx) {
    ctx.query._cache = true;
    return await super.find(ctx);
  },
}));
