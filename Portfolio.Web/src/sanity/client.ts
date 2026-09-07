import { createClient } from '@sanity/client';
import type { AboutMeContent, ServiceContent, TopSectionContent } from './content';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

const sanityClient = projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: '2026-09-04',
        useCdn: true,
    })
    : null;

const topSectionQuery = /* groq */ `*[_type == "topSection"][0]{name, jobs}`;
const servicesQuery = /* groq */ `*[_type == "serviceType"] | order(_createdAt asc){
    _id,
    title,
    "description": pt::text(description),
    price,
    "from": isFrom,
    notes
}`;

const aboutMeQuery = /* groq */ `*[_type == "aboutMe"][0]{ aboutMe }`;

export async function fetchTopSection(): Promise<TopSectionContent | null> {
    if (!sanityClient) return null;

    try {
        return await sanityClient.fetch<TopSectionContent | null>(topSectionQuery);
    } catch {
        return null;
    }
}

export async function fetchServices(): Promise<ServiceContent[]> {
    if (!sanityClient) return [];

    try {
        return await sanityClient.fetch<ServiceContent[]>(servicesQuery);
    } catch {
        return [];
    }
}

export async function fetchAboutMe(): Promise<AboutMeContent | null> {
    if (!sanityClient) return null;

    try {
        return await sanityClient.fetch<AboutMeContent | null>(aboutMeQuery);
    } catch {
        return null;
    }
}