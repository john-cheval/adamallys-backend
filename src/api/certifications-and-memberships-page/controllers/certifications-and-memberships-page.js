"use strict";

/**
 * certifications-and-memberships-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::certifications-and-memberships-page.certifications-and-memberships-page');

module.exports = createCoreController(
  "api::certifications-and-memberships-page.certifications-and-memberships-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
