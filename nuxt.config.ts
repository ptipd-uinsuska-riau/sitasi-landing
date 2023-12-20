// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/660e9fda27.js",
          crossorigin: "anonymous",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:wght@300;400;500&display=swap",
        },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["aos-vue"].includes(tag),
    },
  },
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL_IRAISE, // panggil dari .env
      apiKEY: process.env.API_KEY_IRAISE, // panggil dari .env
      apiURLSITASI: process.env.API_URL_SITASI,
      apiKEYSITASI: process.env.API_KEY_SITASI,
    },
  },
});
