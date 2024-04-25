<template>
  <slot />
</template>

<script setup>

useSeoMeta({
  title: 'FinWave',
  ogTitle: 'FinWave',
  description: 'A convenient open source service for financial accounting',
  ogDescription: 'A convenient open source service for financial accounting',

  ogImage: '/logo.png',
  icon: '/logo.png',
  ogUrl: 'https://finwave.app',
  twitterTitle: 'FinWave',
  twitterDescription: 'A convenient open source service for financial accounting',
  twitterImage: '/logo.png'
})

</script>

<style scoped>

</style>