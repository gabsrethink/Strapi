"use strict";

/**
 *  blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const getAll = (data) => {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    logo: {
      name: item.logo.name,
      url: item.logo.url,
    },
    links: item.link.map((links) => ({
      name: links.name,
    })),
  }));
};

module.exports = createCoreController(
  "api::blog-post.blog-post",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const entity = await strapi.entityService.findMany(
        "api::blog-post.blog-post",
        {
          ...query,
        }
      );
      return getAll(entity);
    },
  })
);
