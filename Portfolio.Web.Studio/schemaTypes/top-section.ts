import { defineType } from 'sanity';

const TopSection = defineType({
    name: 'topSection',
    title: 'Top Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'jobs',
            title: 'Jobs',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
});

export default TopSection;
