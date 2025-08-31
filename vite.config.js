import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss(), netlifyPlugin()],
});
