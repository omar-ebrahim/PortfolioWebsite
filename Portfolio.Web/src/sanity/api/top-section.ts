import { sanityClient } from '../client';
import type { TopSectionContent } from '../content';
import { topSectionQuery } from '../queries/top-section';

export async function fetchTopSection(): Promise<TopSectionContent | null> {
    if (!sanityClient) return null;

    try {
        return await sanityClient.fetch<TopSectionContent | null>(
            topSectionQuery,
        );
    } catch (error) {
        console.error('Error fetching top section content:', error);
        return null;
    }
}
