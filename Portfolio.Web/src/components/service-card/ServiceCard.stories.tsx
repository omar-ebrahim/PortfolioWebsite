import type { Meta, StoryObj } from '@storybook/react-vite';
import type { PortableTextBlock } from '@portabletext/types';

import ServiceCard from './ServiceCard';

const meta = {
    component: ServiceCard,
} satisfies Meta<typeof ServiceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const title = 'Basic service';
const description: PortableTextBlock[] = [
    {
        _key: 'description',
        _type: 'block',
        children: [
            {
                _key: 'description-span',
                _type: 'span',
                marks: [],
                text: 'Brakes, tyres and gears. General health and safety check included.',
            },
        ],
        markDefs: [],
        style: 'normal',
    },
];

export const Primary: Story = {
    args: {
        description,
        price: 45,
        title,
        from: true,
        notes: 'Price does not include replacement parts',
    },
};
