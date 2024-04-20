<template>
  <div id="install" class="min-h-screen">
    <div class="min-h-screen flex flex-col">
      <div class="hero flex-1">
        <div class="hero-content flex-col justify-between lg:flex-row-reverse min-w-full gap-16 xl:px-32">
          <div>
            <div class="mockup-code w-code">
              <pre data-prefix="1"><code>git clone https://github.com/FinWave-App/FinWave-Deploy</code></pre>
              <pre data-prefix="2"><code>cd FinWave-Deploy</code></pre>
              <pre data-prefix="3"><code>echo</code> <code class="bg-warning text-warning-content rounded-xl px-2 py-0.5">https://domain.name/api/</code> <code>> api_url</code></pre>
              <pre data-prefix="4"><code>sudo ./start.sh</code></pre>
            </div>
            <div class="link mt-1 flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
              <a href="https://github.com/FinWave-App/FinWave-Deploy">
                {{ $t("install.buttons.deployRepository") }}
              </a>
            </div>
          </div>
          <div class="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <h1 class="brightness-125 text-3xl md:text-4xl lg:text-5xl font-bold w-title-text">{{ $t("install.title") }}</h1>
            <p class="brightness-125 py-6 text-xl w-title-text">{{ $t("install.description") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.w-code {
  max-width: 80vw;
}

.w-title-text {
  max-width: 40rem
}

.hero {
  background: linear-gradient(156deg, rgba(172, 52, 227, 0.5) 23%, rgba(14,165,232,0.5) 90%);
}
</style>