'use strict';

/**
 * port controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::port.port');
