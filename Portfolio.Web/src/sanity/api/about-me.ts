import { sanityClient } from '../client';
import type { AboutMeContent } from '../content';
import { aboutMeQuery } from '../queries/about-me';

export async function fetchAboutMe(): Promise<AboutMeContent | null> {
    if (!sanityClient) return null;

    try {
        return await sanityClient.fetch<AboutMeContent | null>(aboutMeQuery);
    } catch (error) {
        console.error('Error fetching about me content:', error);
        return null;
    }
}
