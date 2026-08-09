<template>
  <section class="about-intro">
    <div class="about-intro__content">
      <h2>
        {{ $t('about.intro.title_line1') }}
        <br />
        {{ $t('about.intro.title_line2') }}
        <span>.</span>
      </h2>

      <div class="about-intro__text">
        <h3>
          {{ $t('about.intro.subtitle') }}
        </h3>

        <p>
          {{ $t('about.intro.paragraph1') }}
        </p>

        <p>
          {{ $t('about.intro.paragraph2') }}
        </p>
      </div>
    </div>

    <div class="about-intro__separator">
      <span class="separator-line"></span>
      <span class="separator-dot"></span>
      <span class="separator-line"></span>
    </div>

    <div class="about-intro__photo">
      <img src="@/assets/images/Me.png" alt="Naoufal Ayache" />
    </div>
  </section>
</template>

<script>
import './../assets/AboutIntro.css'
</script>
