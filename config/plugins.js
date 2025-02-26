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
