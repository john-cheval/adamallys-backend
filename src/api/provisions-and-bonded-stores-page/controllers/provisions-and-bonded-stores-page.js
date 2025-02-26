"use strict";

/**
 * provisions-and-bonded-stores-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::provisions-and-bonded-stores-page.provisions-and-bonded-stores-page');
module.exports = createCoreController(
  "api::provisions-and-bonded-stores-page.provisions-and-bonded-stores-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
