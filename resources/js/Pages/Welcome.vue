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
    <template #header>
      <h2
        class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
      >
        Dashboard
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div
          class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"
        >
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
{{ $n(1.23, 'currency') }}
{{ $n(1.23, 'decimal') }}
{{ $n(0.5, 'percent') }}
</pre>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
