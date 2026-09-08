import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const productionDataset = process.env.SANITY_STUDIO_PRODUCTION_DATASET;
const developmentDataset = process.env.SANITY_STUDIO_DEVELOP_DATASET;

if (!projectId || !productionDataset || !developmentDataset) {
    throw new Error(
        'SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_PRODUCTION_DATASET, and SANITY_STUDIO_DEVELOP_DATASET must be configured.',
    );
}

const plugins = [structureTool(), visionTool()];

export default defineConfig([
    {
        name: 'production',
        title: 'Production',
        basePath: '/production',
        projectId,
        dataset: productionDataset,
        plugins,
        schema: {
            types: schemaTypes,
        },
    },
    {
        name: 'development',
        title: 'Development',
        basePath: '/development',
        projectId,
        dataset: developmentDataset,
        plugins,
        schema: {
            types: schemaTypes,
        },
    },
]);
