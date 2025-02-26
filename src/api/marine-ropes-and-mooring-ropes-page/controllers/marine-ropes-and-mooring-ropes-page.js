"use strict";

/**
 * marine-ropes-and-mooring-ropes-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::marine-ropes-and-mooring-ropes-page.marine-ropes-and-mooring-ropes-page');
module.exports = createCoreController(
  "api::marine-ropes-and-mooring-ropes-page.marine-ropes-and-mooring-ropes-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
