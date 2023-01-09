"use strict";

/**
 *  blog-post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

const getAll = (data) => {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    content: item.content,
    logo: {
      name: item.logo.name,
      url: item.logo.url,
    },
    footerLogo: {
      name: item.footerLogo.name,
      url: item.footerLogo.url,
    },
    footerInfo: item.footerInfo,
    trailTitle: item.trailTitle,
    trailDescription: item.trailDescription,
    links: item.link.map((links) => ({
      name: links.name,
    })),
    text_and_image: item.text_and_image.map((posts) => ({
      title: posts.title,
      description: posts.description,
      image: {
        name: posts.image.name,
        url: posts.image.url,
      },
      is_text_on_left: posts.is_text_on_left,
    })),
    projectTitle: item.projectTitle,
    projectDescription: item.projectDescription,
    projectLogo: {
      name: item.projectLogo.name,
      url: item.projectLogo.url,
    },
    galery: item.galery.map((posts) => ({
      title: posts.title,
      description: posts.description,
      isDarkTheme: posts.isDarkTheme,
      url: posts.url,
      images: posts.images.map((img) => ({
        name: img.name,
        url: img.url,
      })),
    })),
    promGallery: item.promGallery.map((image) => ({
      name: image.name,
      url: image.url,
    })),
    eventTitle: item.eventTitle,
    eventDescription: item.eventDescription,
    eventParagraph: item.eventParagraph,
    team: item.team.map((posts) => ({
      name: posts.name,
      role: posts.role,
      function: posts.function,
      isIntern: posts.isIntern,
      image: {
        name: posts.image.name,
        url: posts.image.url,
      },
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
