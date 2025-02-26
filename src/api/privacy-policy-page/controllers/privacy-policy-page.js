"use strict";

/**
 * privacy-policy-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::privacy-policy-page.privacy-policy-page');
module.exports = createCoreController(
  "api::privacy-policy-page.privacy-policy-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
