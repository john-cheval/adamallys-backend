"use strict";

/**
 * milestone-section controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::milestone-section.milestone-section');
module.exports = createCoreController(
  "api::milestone-section.milestone-section",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
