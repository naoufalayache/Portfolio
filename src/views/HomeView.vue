<template>
  <section class="home">
    <div class="hero">
      <div class="hero-left">
        <span class="eyebrow">FULL-STACK DEVELOPER</span>

        <h1>
          {{ $t('home.hero.title_line1') }}
          <br />
          {{ $t('home.hero.title_line2') }}
          <br />
          <span>{{ $t('home.hero.title_highlight') }}</span>
        </h1>

        <div class="actions">
          <RouterLink to="/projects" class="primary-button">
            {{ $t('home.actions.projet') }}
            <i class="fa-solid fa-arrow-up-right-from-square actionsLogo"></i>
          </RouterLink>

          <a href="/cv.pdf" target="_blank" class="secondary-button">
            {{ $t('home.actions.CV') }} <i class="fa-solid fa-arrow-down actionsLogo"></i>
          </a>
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
          {{ $t('home.hero_right.line1') }}
          <br />
          {{ $t('home.hero_right.line2') }}
        </div>

        <div class="location"><i class="fa-solid fa-location-dot"></i>LYON, FRANCE</div>
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

<script>
import './../assets/HomeView.css'
</script>
