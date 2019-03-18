'use strict';

/**
 * Fund.js controller
 *
 * @description: A set of functions called "actions" for managing `Fund`.
 */

module.exports = {

  /**
   * Retrieve fund records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.fund.search(ctx.query);
    } else {
      return strapi.services.fund.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a fund record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.fund.fetch(ctx.params);
  },

  /**
   * Count fund records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.fund.count(ctx.query);
  },

  /**
   * Create a/an fund record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.fund.add(ctx.request.body);
  },

  /**
   * Update a/an fund record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.fund.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an fund record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.fund.remove(ctx.params);
  }
};
