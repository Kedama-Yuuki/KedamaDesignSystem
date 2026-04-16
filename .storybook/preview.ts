import type { Preview } from '@storybook/react';
import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'page',
      values: [
        { name: 'page', value: '#F0EEE9' },
        { name: 'surface', value: '#F8F7F4' },
        { name: 'inverse', value: '#040302' },
      ],
    },
  },
};

export default preview;
