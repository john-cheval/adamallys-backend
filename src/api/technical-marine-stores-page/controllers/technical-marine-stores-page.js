"use strict";

/**
 * technical-marine-stores-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::technical-marine-stores-page.technical-marine-stores-page');
module.exports = createCoreController(
  "api::technical-marine-stores-page.technical-marine-stores-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
