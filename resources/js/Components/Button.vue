<script setup>
import { cva } from 'cva';

const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit'].includes(value),
  },
  intent: {
    type: String,
    default: 'secondary',
  },
  size: {
    type: String,
    default: 'normal',
  },
  class: {
    type: [String, Object, Array],
    default: null,
  },
});

const button = cva({
  base: 'inline-flex items-center  border rounded-md font-semibold text-xs uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150',
  variants: {
    intent: {
      primary:
        'bg-gray-800 dark:bg-gray-200 border-transparent text-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300',
      secondary:
        'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 ',
      danger:
        'bg-red-600 border-transparent text-white hover:bg-red-500 active:bg-red-700 focus:ring-red-500',
    },
    size: {
      small: 'px-2 py-1',
      normal: 'px-4 py-2',
      large: 'px-6 py-3',
    },
  },
});
</script>

<template>
  <button
    :type="type"
    :class="cn(button({ intent, size }), props.class)"
  >
    <slot />
  </button>
</template>
