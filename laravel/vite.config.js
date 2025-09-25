import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'],
            refresh: true,
        }),
        react({
            // otomatis JSX runtime
            jsxRuntime: 'automatic',
        }),
    ],
    server: {
        host: '0.0.0.0',
        port: 5173, //#ubah sesuai yang dimau
        strictPort: true,
        cors: true,
        hmr: {
            host: 'localhost',
        },
    },
});
