<template>
  <section class="home">
    <div class="hero">
      <div class="hero-left">
        <span class="eyebrow">FULL-STACK DEVELOPER</span>

        <h1>
          Je conçois des
          <br />
          applications web
          <br />
          <span>modernes.</span>
        </h1>

        <div class="actions">
          <RouterLink to="/projects" class="primary-button"> VOIR MES PROJETS ↗ </RouterLink>

          <a href="/cv.pdf" target="_blank" class="secondary-button"> TÉLÉCHARGER CV ↓ </a>
        </div>
      </div>

      <div class="hero-marker">
        <span class="marker-dot"></span>
        <span class="marker-line"></span>
      </div>

      <div class="hero-right">
        <div class="marker-circle"></div>

        <div class="availability">
          <span class="dot"></span>
          DISPONIBLE POUR
          <br />
          DE NOUVEAUX PROJETS
        </div>

        <div class="location">LYON, FRANCE</div>
      </div>
    </div>
  </section>

  <svg width="0" height="0" style="position: absolute">
    <filter id="stamp-texture" x="-50%" y="-50%" width="200%" height="200%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.04"
        numOctaves="3"
        seed="7"
        result="noise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale="25"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
</template>

<style scoped>
.home {
  min-height: 90vh;
  padding: 0 4vw;
  display: flex;
  align-items: center;
}

.actions {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
}

.hero {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr auto 1fr;
  align-items: center;
}

.hero-marker {
  height: 420px;
  width: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-dot {
  width: 12px;
  height: 12px;

  background: var(--crimson);
  border-radius: 50%;

  flex-shrink: 0;
}

.marker-line {
  width: 1px;
  flex: 1;

  margin-top: 10px;

  background: var(--crimson);
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  color: var(--crimson);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 25px;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 5.5vw, 6.5rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
  font-weight: 600;
}

h1 span {
  color: var(--crimson);
}

.hero-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 35px;
  padding-left: 4vw;
  text-align: left;
}

.marker-circle {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--crimson);
  margin-bottom: 20px;
  align-self: center;
  filter: url(#stamp-texture);
  margin-left: -60px;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 16px 24px;

  background: var(--crimson);
  color: var(--chalk);

  font-size: 0.75rem;
  font-weight: 700;
}

.secondary-button {
  display: inline-flex;
  align-items: center;

  padding: 16px 0;

  font-size: 0.75rem;
  font-weight: 700;
}

.primary-button {
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 35px;

  padding-left: 4vw;
}

.availability,
.location {
  font-size: 0.75rem;
  font-weight: 600;

  line-height: 1.6;
}

.dot {
  width: 8px;
  height: 8px;

  display: inline-block;

  margin-right: 8px;

  background: var(--crimson);

  border-radius: 50%;
}
</style>

<script></script>
