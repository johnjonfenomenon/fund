'use strict';

/**
 * Investor.js controller
 *
 * @description: A set of functions called "actions" for managing `Investor`.
 */

module.exports = {

  /**
   * Retrieve investor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.investor.search(ctx.query);
    } else {
      return strapi.services.investor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a investor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.investor.fetch(ctx.params);
  },

  /**
   * Count investor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.investor.count(ctx.query);
  },

  /**
   * Create a/an investor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.investor.add(ctx.request.body);
  },

  /**
   * Update a/an investor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.investor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an investor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.investor.remove(ctx.params);
  }
};
