import { defineField, defineType } from 'sanity';

const AboutMe = defineType({
    name: 'aboutMe',
    title: 'About Me',
    type: 'document',
    // Otherwise it'll render the first block of the array as the title, which is not what we want.
    preview: {
        prepare: () => ({
            title: 'About Me',
        }),
    },
    fields: [
        defineField({
            name: 'aboutMe',
            title: 'About Me',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) =>
                Rule.required()
                    .error('About me is required.')
                    .min(1)
                    .error('About me must have at least one block.'),
        }),
    ],
});

export default AboutMe;
