import { sanityClient } from '../client';
import type { ServiceContent } from '../content';
import { servicesQuery } from '../queries/services';

export async function fetchServices(): Promise<ServiceContent[]> {
    if (!sanityClient) return [];

    try {
        return await sanityClient.fetch<ServiceContent[]>(servicesQuery);
    } catch (error) {
        console.error('Error fetching services content:', error);
        return [];
    }
}
