module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:", "*"],
          "img-src": ["'self'", "data:", "blob:", "*"],
          "media-src": ["'self'", "data:", "blob:", "*"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// module.exports = [
//   'strapi::errors',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'connect-src': ["'self'", 'https:'],
//           'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
//           'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::favicon',
//   'strapi::public',
// ];
