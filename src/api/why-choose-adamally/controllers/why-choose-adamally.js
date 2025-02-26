"use strict";

/**
 * why-choose-adamally controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::why-choose-adamally.why-choose-adamally');
module.exports = createCoreController(
  "api::why-choose-adamally.why-choose-adamally",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
