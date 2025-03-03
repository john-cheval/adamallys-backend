"use strict";

/**
 * industrial-and-energy-sector-supplies-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::industrial-and-energy-sector-supplies-page.industrial-and-energy-sector-supplies-page');

module.exports = createCoreController(
  "api::industrial-and-energy-sector-supplies-page.industrial-and-energy-sector-supplies-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
