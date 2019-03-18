'use strict';

/**
 * Bal.js controller
 *
 * @description: A set of functions called "actions" for managing `Bal`.
 */

module.exports = {

  /**
   * Retrieve bal records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.bal.search(ctx.query);
    } else {
      return strapi.services.bal.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a bal record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.bal.fetch(ctx.params);
  },

  /**
   * Count bal records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bal.count(ctx.query);
  },

  /**
   * Create a/an bal record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bal.add(ctx.request.body);
  },

  /**
   * Update a/an bal record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bal.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bal record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bal.remove(ctx.params);
  }
};
