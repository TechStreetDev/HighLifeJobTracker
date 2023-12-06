import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import prefetch from "@astrojs/prefetch";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), prefetch(), preact({ compat: true })],
	output: "server",
	adapter: cloudflare(),
	vite: {
		ssr: {
			noExternal: ["@heroicons/react"]
		}
	}
});
