"use strict";

/**
 * other-service controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::other-service.other-service');
module.exports = createCoreController(
  "api::other-service.other-service",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
