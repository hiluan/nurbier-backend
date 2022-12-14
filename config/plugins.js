module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      // // use graphql on Heroku
      // endpoint: "/graphql",
      // shadowCRUD: true,
      // playgroundAlways: true,
      // depthLimit: 100,
      // apolloServer: {
      //   tracing: false,
      //   // use graphql on Heroku ^
      // },
    },
  },
  // graphql: {
  //   enabled: true,
  //   config: {
  //     endpoint: "/graphql",
  //     shadowCRUD: true,
  //     playgroundAlways: true,
  //     defaultLimit: 10,
  //     maxLimit: 20,
  //     apolloServer: {
  //       tracing: false,
  //     },
  //   },
  // },
  // use graphql on Railway.app
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: true,
    depthLimit: 100,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
      introspection: true,
    },
  },
});
