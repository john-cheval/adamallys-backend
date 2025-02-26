"use strict";

/**
 * marine-logistics-and-warehousing-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::marine-logistics-and-warehousing-page.marine-logistics-and-warehousing-page');
module.exports = createCoreController(
  "api::marine-logistics-and-warehousing-page.marine-logistics-and-warehousing-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
