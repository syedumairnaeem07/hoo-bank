import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/hoo-bank/',
    plugins: [react()],
    server: {
        port: 4000,
    },
});
