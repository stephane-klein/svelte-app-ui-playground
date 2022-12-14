import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
    }),
    paths: {
      base: process.env.BASE_PATH || "",
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
