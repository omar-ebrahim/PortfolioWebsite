import { defineType } from "sanity";

const ServiceSection = defineType({
    name: 'serviceSection',
    title: 'Service Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ],
});

export default ServiceSection;