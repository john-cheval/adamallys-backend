'use strict';

/**
 * port service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::port.port');
