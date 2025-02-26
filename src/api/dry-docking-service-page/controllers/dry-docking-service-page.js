"use strict";

/**
 * dry-docking-service-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::dry-docking-service-page.dry-docking-service-page');
module.exports = createCoreController(
  "api::dry-docking-service-page.dry-docking-service-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
