<template>
  <div class="bg" aria-hidden="true">
    <div class="carbon" />
    <div class="stripe" />
    <div class="speed">
      <span style="top: 18%; animation-delay: 0s" />
      <span style="top: 42%; animation-delay: 3s; width: 30vw" />
      <span style="top: 67%; animation-delay: 6s" />
      <span style="top: 85%; animation-delay: 9s; width: 25vw" />
    </div>
    <div class="checkers" />
    <div class="vignette" />
  </div>
</template>

<style scoped>
.bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
  background-color: #0e0e12;
}

/* background texture */
.carbon {
  position: absolute;
  inset: 0;
  opacity: 0.55;
  background:
    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: #131313;
  background-size: 20px 20px;
}

/* red stripe */
.stripe {
  position: absolute;
  top: -20%;
  left: 62%;
  width: 90px;
  height: 160%;
  background: linear-gradient(180deg, transparent, #e10600 30%, #e10600 70%, transparent);
  opacity: 0.35;
  transform: rotate(25deg);
  box-shadow: 140px 0 0 -30px rgba(255, 255, 255, 0.12);
  filter: blur(1px);
}

/* white lines */
.speed span {
  position: absolute;
  left: -40vw;
  width: 40vw;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  animation: zoom 12s linear infinite;
}

@keyframes zoom {
  to {
    transform: translateX(160vw);
  }
}

/* flag on bottom */
.checkers {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 110px;
  opacity: 0.12;
  background: conic-gradient(#fff 25%, #000 0 50%, #fff 0 75%, #000 0) 0 0 / 36px 36px;
  mask-image: linear-gradient(to top, black, transparent);
}

.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 45%, rgba(0, 0, 0, 0.6) 100%);
}

@media (prefers-reduced-motion: reduce) {
  .speed span {
    animation: none;
  }
}
</style>
