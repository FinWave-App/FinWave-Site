<template>
  <div id="main" class="min-h-screen flex flex-col">
    <div class="hero flex-1">
      <div class="hero-content flex-col justify-between lg:flex-row-reverse min-w-full gap-4 xl:px-32">
        <ul class="circles -z-10 pointer-events-none">
          <li>$</li>
          <li>¥</li>
          <li>₣</li>
          <li>£</li>
          <li>₴</li>
          <li>₸</li>
          <li>₽</li>
          <li>₹</li>
          <li>Ξ</li>
          <li>₿</li>
        </ul>
        <img src="/public/icon.png" class="h-32 lg:h-64" />
        <div class="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
          <h1 class="brightness-125 text-3xl md:text-4xl lg:text-5xl font-bold w-title-text">{{ $t("main.hero.title") }}</h1>
          <p class="brightness-125 py-6 md:text-xl w-title-text">{{ $t("main.hero.description") }}</p>
          <div class="grid grid-cols-2 gap-2 w-full md:w-1/2 lg:w-96">
            <a href="https://demo.finwave.app" class="btn btn-success"> {{$t("main.hero.buttons.try")}} </a>
            <NuxtLink href="#features" class="btn btn-accent"> {{$t("main.hero.buttons.features")}} </NuxtLink>
            <NuxtLink href="#install" class="btn brightness-125 btn-outline col-span-2"> {{$t("main.hero.buttons.install")}} </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.w-title-text {
  max-width: 40rem
}

.hero {
  background: linear-gradient(156deg, rgba(16,185,130,0.5) 23%, rgba(14,165,232,0.5) 90%);
}

@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  @apply text-5xl font-bold select-none;

  position: absolute;
  display: block;
  list-style: none;

  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>