"use strict";

/**
 * footer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::footer.footer');
module.exports = createCoreController(
  "api::footer.footer", // Specifies the content type UID (api::home-page.home-page)
  ({ strapi }) => ({
    async find(ctx) {
      // The custom 'find' method for this controller
      ctx.query._cache = true; // Enabling caching for this request
      return await super.find(ctx); // Calling the default 'find' method from the core controller and returning the result
    },
  })
);
