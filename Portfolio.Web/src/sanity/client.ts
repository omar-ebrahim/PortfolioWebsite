import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export const sanityClient =
    projectId && dataset
        ? createClient({
              projectId,
              dataset,
              apiVersion: '2026-09-04',
              useCdn: true,
          })
        : null;
