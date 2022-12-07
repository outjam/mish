'use strict';

/**
 * mposts service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mposts.mposts');
