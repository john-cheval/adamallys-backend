"use strict";

/**
 * contact-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::contact-page.contact-page');
module.exports = createCoreController(
  "api::contact-page.contact-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
