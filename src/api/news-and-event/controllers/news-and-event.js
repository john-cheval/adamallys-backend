"use strict";

/**
 * news-and-event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::news-and-event.news-and-event');
module.exports = createCoreController(
  "api::news-and-event.news-and-event",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query._cache = true;
      return await super.find(ctx);
    },
  })
);
