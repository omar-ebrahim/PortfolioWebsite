import type { PortableTextBlock } from '@portabletext/types';

export interface TopSectionContent {
    name: string;
    jobs: string[];
}

export interface ServiceContent {
    _id: string;
    title: string;
    description: string;
    price: number;
    from?: boolean;
    notes?: string;
}

export interface AboutMeContent {
    aboutMe: PortableTextBlock[];
}
