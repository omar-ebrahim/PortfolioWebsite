import { defineField, defineType } from "sanity";

const ServiceType = defineType({
    name: 'serviceType',
    title: 'Service Type',
    type: 'document',
    fieldsets: [
        {
            name: 'pricing',
            title: 'Pricing',
            options: {columns: 2},
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Maximum 100 characters.',
            validation: Rule => Rule.required().max(100).error('Title is required and must not exceed 100 characters.'),

        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required().error('Description is required.').min(1).error('Description must have at least one block.'),
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            options: {
                list: [
                    { title: 'USD ($)', value: 'USD' },
                    { title: 'EUR (€)', value: 'EUR' },
                    { title: 'GBP (£)', value: 'GBP' },
                ],
            },
            initialValue: 'GBP',
            fieldset: 'pricing',
            validation: Rule => Rule.required().error('Currency is required.'),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            fieldset: 'pricing',
            validation: Rule => Rule.required().error('Price is required.'),
        }),
        defineField({
            name: 'isFrom',
            title: 'Is From',
            type: 'boolean',
            description: 'Indicates whether the service is from the given price or not. Left unticked if the price is fixed.',
            initialValue: false,
        }),
        defineField({
            name: 'notes',
            title: 'Notes',
            type: 'string',
            description: 'Additional notes or disclaimers about the service.',
            validation: Rule => Rule.max(200).error('Notes must not exceed 200 characters.'),
        })
    ]
});

export default ServiceType;
