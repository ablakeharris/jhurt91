import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        navy: {
          50: { value: '#e8eaf6' },
          100: { value: '#c5cae9' },
          200: { value: '#9fa8da' },
          300: { value: '#7986cb' },
          400: { value: '#5c6bc0' },
          500: { value: '#3949ab' },
          600: { value: '#2c3e9e' },
          700: { value: '#1B2A6B' },
          800: { value: '#162259' },
          900: { value: '#0f1840' },
        },
        gold: {
          50: { value: '#fffde7' },
          100: { value: '#fff9c4' },
          200: { value: '#fff59d' },
          300: { value: '#fff176' },
          400: { value: '#ffee58' },
          500: { value: '#F5C518' },
          600: { value: '#e6b800' },
          700: { value: '#c9a000' },
          800: { value: '#a68500' },
          900: { value: '#7a6200' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
