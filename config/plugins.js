// module.exports = () => ({});

module.exports = ({ env }) => ({
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600000,
        },
      },
      strategy: {
        contentTypes: [
          "api::home-page.home-page",
          "api::milestone-section.milestone-section",
          "api::footer.footer",
          "api::header.header",
          "api::about-page.about-page",
          "api::base-category.base-category",
          "api::category.category",
          "api::certifications-and-memberships-page.certifications-and-memberships-page",
          "api::contact-page.contact-page",
          "api::digitalization-and-technology-at-adamallys-page.digitalization-and-technology-at-adamallys-page",
          "api::distributors-and-stockists-page.distributors-and-stockists-page",
          "api::dry-docking-service-page.dry-docking-service-page",
          "api::industrial-and-energy-sector-supplies-page.industrial-and-energy-sector-supplies-page",
          "api::marine-logistics-and-warehousing-page.marine-logistics-and-warehousing-page",
          "api::marine-ropes-and-mooring-ropes-page.marine-ropes-and-mooring-ropes-page",
          "api::news-and-event.news-and-event",
          "api::other-service.other-service",
          "api::port.port",
          "api::privacy-policy-page.privacy-policy-page",
          "api::product.product",
          "api::provisions-and-bonded-stores-page.provisions-and-bonded-stores-page",
          "api::secondary-category.secondary-category",
          "api::ship-spare-parts-page.ship-spare-parts-page",
          "api::ship-supply-page.ship-supply-page",
          "api::specific-category.specific-category",
          "api::sustainability-at-adamallys-page.sustainability-at-adamallys-page",
          "api::technical-marine-stores-page.technical-marine-stores-page",
          "api::why-choose-adamally.why-choose-adamally",
        ],
      },
    },
  },
  // upload: {
  //     config: {
  //         provider: 'cloudinary',
  //         providerOptions: {
  //             cloud_name: env('CLOUDINARY_NAME'),
  //             api_key: env('CLOUDINARY_KEY'),
  //             api_secret: env('CLOUDINARY_SECRET'),
  //         },
  //         actionOptions: {
  //             upload: {},
  //             delete: {},
  //         },
  //     },
  // },

  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACES_ACCESS_KEY"),
        secret: env("DO_SPACES_SECRET_KEY"),
        endpoint: env("DO_SPACES_ENDPOINT"),
        space: env("DO_SPACES_BUCKET"),
      },
    },
  },
});
