### Create React Router App in JavaScript instead of TypeScript

```
npx create-react-router@latest my-react-router-app-js --template remix-run/react-router-templates/javascript
cd my-app
npm i
npm run dev
```

### Making this works in Netlify

Install Netlify’s React Router Vite plugin:

```
npm install --save-dev @netlify/vite-plugin-react-router
```

Update `vite.config.js`

```
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
// ↓ add this
import netlifyPlugin from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss(), netlifyPlugin()], // <-- Register the plugin here
});
```

Create new file in root project directory `netlify.toml`

```
[build]
command = "react-router build"
publish = "build/client"

[dev]
command = "react-router dev"
```

----

### Creating new route

Add config option `routes: "app/routes",` into `react-router.config.js`

Create About component in `app/routes/about.jsx`

```
export default function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>About Page</h2>
      <p>This is a sample page.</p>

      {/* Back link to home */}
      <a href="/">⬅ Go back Home</a>
    </div>
  );
}
```

Register in `app/routes.js`

```
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.jsx"),
  route("about", "routes/about.jsx"), // <--- Add this
  route("product/:id", "routes/product.jsx"),
];
```

---

## Reference

### React Router Netlify Template

https://github.com/netlify/react-router-template/tree/main