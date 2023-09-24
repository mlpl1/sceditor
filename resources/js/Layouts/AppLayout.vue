<script setup>
import { isLocaleSupported, setLocale } from '@/i18n';
import { Head, router, usePage } from '@inertiajs/vue3';
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import Banner from '@/Components/Banner.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});

const showingNavigationDropdown = ref(false);
const i18n = useI18n();
const locale = computed(() => usePage().props.locale);

watch(
  locale,
  async (locale) => {
    console.log('yay, updating');
    if (!isLocaleSupported(locale)) {
      return;
    }
    console.log('setting locale...');
    await setLocale(i18n, locale);
  },
  { immediate: true }
);

const switchToTeam = (team) => {
  router.put(
    route('current-team.update'),
    {
      team_id: team.id,
    },
    {
      preserveState: false,
    }
  );
};

const logout = () => {
  router.post(route('logout'));
};
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
