import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
});
