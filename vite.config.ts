import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { iconsSpritesheet } from 'vite-plugin-icons-spritesheet';
import tsconfigPaths from 'vite-tsconfig-paths';

const iconsSpritesheetProps = {
  inputDir: 'resources/icons',
  outputDir: 'app/components/ui/icon',
  withTypes: true,
  formatter: 'biome',
  pathToFormatterConfig: 'biome.json',
  iconNameTransformer: (name) => name[0]?.toLowerCase() + name.slice(1),
} satisfies Parameters<typeof iconsSpritesheet>[0];

export default defineConfig({
  plugins: [
    iconsSpritesheet(iconsSpritesheetProps),
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
});
