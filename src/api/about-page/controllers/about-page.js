"use strict";

/**
 * about-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::about-page.about-page");/
module.exports = createCoreController(
  "api::about-page.about-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
