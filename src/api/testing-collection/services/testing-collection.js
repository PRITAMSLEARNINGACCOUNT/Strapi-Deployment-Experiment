'use strict';

/**
 * testing-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-collection.testing-collection');
