/**
 * Vite configuration for the React app.
 * Keeps the configuration minimal for the sample project.
 * @module vite.config
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
