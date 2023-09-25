<script setup>
import { isLocaleSupported, setLocale } from '@/i18n';
import { Head, usePage } from '@inertiajs/vue3';
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import Banner from '@/Components/Banner.vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
});

const i18n = useI18n();
const locale = computed(() => usePage().props.locale);

watch(
  locale,
  async (newLocale) => {
    if (!isLocaleSupported(newLocale)) {
      return;
    }
    await setLocale(i18n, newLocale);
  },
  { immediate: true },
);
</script>

<template>
  <div>
    <Head :title="title" />

    <Banner />

    <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
      <!-- Page Heading -->
      <header
        v-if="$slots.header"
        class="bg-white dark:bg-gray-800 shadow"
      >
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
