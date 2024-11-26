import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
        plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: '/home/chef/workspace/.test/setup.js',
        outputFile: 'test-results.json',
        reporters: ['json']
    }
})
