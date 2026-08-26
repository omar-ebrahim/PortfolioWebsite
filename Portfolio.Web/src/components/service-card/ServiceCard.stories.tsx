import type { Meta, StoryObj } from '@storybook/react-vite';

import ServiceCard from './ServiceCard';

const meta = {
    component: ServiceCard,
} satisfies Meta<typeof ServiceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        description: 'hello world',
        price: 1234,
        title: 'something',
    },
};
