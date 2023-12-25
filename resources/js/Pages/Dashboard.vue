<script setup>
import Button from '@/Components/Button.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

function setDarkTheme() {
  const rootClassList = document.documentElement.classList;
  rootClassList.toggle('theme-dark')
}
</script>

<template>
  <AppLayout title="Dashboard">
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
          class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg p-3"
        >
          <div class="flex flex-col items-start gap-1">
            <Button>Default button</Button>
            <Button intent="primary">Primary button</Button>
            <Button intent="secondary">Secondary button</Button>
            <Button intent="danger">Danger button</Button>
            <Button
              intent="primary"
              size="small"
              >Primary button (sm)</Button
            >
            <Button
              intent="secondary"
              size="small"
              >Secondary button (sm)</Button
            >
            <Button
              intent="danger"
              size="small"
              >Danger button (sm)</Button
            >
            <Button
              intent="primary"
              size="large"
              >Primary button (lg)</Button
            >
            <Button
              intent="secondary"
              size="large"
              >Secondary button (lg)</Button
            >
            <Button
              intent="danger"
              size="large"
              >Danger button (lg)</Button
            >

            <Button intent="primary" @click="setDarkTheme">Light/dark Theme</Button>

            <div class="w-5 h-5 bg-primary"></div>
            <div class="w-5 h-5 bg-secondary"></div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
