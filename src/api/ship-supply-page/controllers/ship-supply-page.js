"use strict";

/**
 * ship-supply-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::ship-supply-page.ship-supply-page');
module.exports = createCoreController(
  "api::ship-supply-page.ship-supply-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
