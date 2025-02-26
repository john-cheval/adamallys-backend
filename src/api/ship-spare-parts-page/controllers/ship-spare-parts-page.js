"use strict";

/**
 * ship-spare-parts-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::ship-spare-parts-page.ship-spare-parts-page');
module.exports = createCoreController(
  "api::ship-spare-parts-page.ship-spare-parts-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
