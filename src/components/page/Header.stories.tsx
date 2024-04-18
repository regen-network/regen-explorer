import type { Meta, StoryObj } from '@storybook/react';
import {Header} from './Header';

const meta: Meta = {
    title: 'Page/Header',
    component: Header,
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {}