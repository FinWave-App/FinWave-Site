<template>
  <div class="navbar bg-base-100 bg-opacity-40 backdrop-blur shadow">
    <div class="navbar-start gap-4 w-full brightness-110">
      <div class="dropdown dropdown-hover">
        <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>

        <menu-items tabindex="0" class="menu menu-compact dropdown-content p-2 px-2 gap-1 shadow bg-base-100 rounded-box w-52 z-[2]">
        </menu-items>
      </div>

      <div class="normal-case text-xl font-bold flex items-start gap-1 ml-2 brightness-110">
        <div class="flex justify-center items-center gap-2">
          <img src="/public/favicon.ico" class="h-12">
          FinWave
        </div>
      </div>

      <div class="hidden md:flex w-full">
        <menu-items class="menu menu-horizontal px-1 brightness-110">
        </menu-items>
      </div>
    </div>

    <div class="navbar-end mr-4 gap-3 max-w-9">
      <theme/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>