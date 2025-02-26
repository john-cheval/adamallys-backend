"use strict";

/**
 * distributors-and-stockists-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::distributors-and-stockists-page.distributors-and-stockists-page');
module.exports = createCoreController(
  "api::distributors-and-stockists-page.distributors-and-stockists-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
