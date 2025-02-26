"use strict";

/**
 * digitalization-and-technology-at-adamallys-page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::digitalization-and-technology-at-adamallys-page.digitalization-and-technology-at-adamallys-page');
module.exports = createCoreController(
  "api::digitalization-and-technology-at-adamallys-page.digitalization-and-technology-at-adamallys-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
