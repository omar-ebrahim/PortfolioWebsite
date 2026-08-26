import type { Meta, StoryObj } from '@storybook/react-vite';

import ServiceCard from './ServiceCard';

const meta = {
    component: ServiceCard,
} satisfies Meta<typeof ServiceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const title = 'Basic service';
const description =
    'Brakes, tyres and gears.\nGeneral health and safety check included.';

export const Primary: Story = {
    args: {
        description,
        price: 45,
        title,
        from: true,
        notes: 'Price does not include replacement parts',
    },
};
