<template>
  <div id="features" class="min-h-screen">
    <div class="min-h-screen flex flex-col items-stretch min-w-full px-16 xl:px-32">
      <h1 class="brightness-125 text-3xl md:text-4xl lg:text-5xl font-bold pt-20 md:pt-28 text-center">
        {{ $t("features.title") }}
      </h1>

      <div class="flex-1 grid grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:grid-rows-2 gap-8 lg:gap-0 w-full py-8 lg:py-12">
        <div class="panel">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-4 0 28 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>

          <h2 class="title">
            {{ $t("features.openSource.title") }}
          </h2>

          <p class="text-center pt-2">
            {{ $t("features.openSource.description") }}
          </p>
        </div>

        <div class="panel">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
          </div>

          <h2 class="title">
            {{ $t("features.webBased.title") }}
          </h2>

          <p class="text-center pt-2">
            {{ $t("features.webBased.description") }}
          </p>
        </div>

        <div class="panel">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
          </div>

          <h2 class="title">
            {{ $t("features.deepAnalytics.title") }}
          </h2>

          <p class="text-center pt-2">
            {{ $t("features.deepAnalytics.description") }}
          </p>
        </div>

        <div class="panel">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg>
          </div>

          <h2 class="title">
            {{ $t("features.automations.title") }}
          </h2>

          <p class="text-center pt-2">
            {{ $t("features.automations.description") }}
          </p>
        </div>

        <div class="panel">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
            </svg>
          </div>

          <h2 class="title">
            {{ $t("features.exportCSV.title") }}
          </h2>

          <p class="text-center pt-2">
            {{ $t("features.exportCSV.description") }}
          </p>
        </div>

        <div class="panel">
          <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
          </div>

          <h2 class="title">
            {{ $t("features.multiLanguage.title") }}
          </h2>

          <p class="text-center pt-2">
            {{ $t("features.multiLanguage.description") }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.panel {
  @apply p-2;
}

.panel .icon {
  @apply w-32 h-32;
}

.panel .title {
  @apply text-center text-xl lg:text-2xl font-bold;
}
</style>