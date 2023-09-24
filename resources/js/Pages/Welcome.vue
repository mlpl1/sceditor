<script setup>
import { router } from '@inertiajs/vue3';

import AppLayout from '@/Layouts/AppLayout.vue';

defineProps({
  locale: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <AppLayout title="Welcome">
    <button
      class="bg-red-500 px-3 py-0.5 rounded m-1"
      @click="router.put(route('users.set-locale', 'it'))"
    >
      IT
    </button>
    <button
      class="bg-red-500 px-3 py-0.5 rounded m-1"
      @click="router.put(route('users.set-locale', 'en'))"
    >
      EN
    </button>
    <pre class="text-white">
      locale: {{ locale }}
      {{ $d(new Date(), 'date') }}
      {{ $d(new Date(), 'short') }}
      {{ $d(new Date(), 'long') }}
      {{ $d(new Date(), 'datetime') }}
      {{ $d(new Date(), 'time') }}
      {{ $d(new Date(), 'time_full') }}
      yolo: {{ $t('yolo') }}
    </pre>
  </AppLayout>
</template>
