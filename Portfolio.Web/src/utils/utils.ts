export const sectionIds = {
    home: 'home',
    about: 'aboutme',
    services: 'services',
    contact: 'contact',
} as const;

// Convert the dictionary above into an enum
export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export const navigateToSection = (sectionId: SectionId) => {
    document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
