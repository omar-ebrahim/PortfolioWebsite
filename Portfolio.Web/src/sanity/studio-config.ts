import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

export default defineConfig({
    name: import.meta.env.VITE_SANITY_NAME,
    title: import.meta.env.VITE_SANITY_TITLE,
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    basePath: import.meta.env.VITE_SANITY_BASEPATH,
    plugins: [structureTool(), visionTool()],
    schema: {
        types: [],
    },
});
