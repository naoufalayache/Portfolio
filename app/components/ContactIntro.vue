<style scoped src="@/assets/CSS/ContactIntro.css"></style>
<template>
  <section class="contact-intro">
    <h1 class="contact-intro__title">{{ $t('contact.title') }}<span>.</span></h1>

    <div class="contact-intro__text">
      <p>
        {{ $t('contact.intro.line1') }}
      </p>

      <p>
        {{ $t('contact.intro.line2') }}
      </p>

      <p>
        {{ $t('contact.intro.line3') }}
      </p>
    </div>

    <p class="contact-intro__cta">{{ $t('contact.intro.cta') }}<span>.</span></p>

    <div class="contact-intro__line"></div>

    <div class="contact-intro__availability">
      <span class="availability-dot"></span>

      <span>
        {{ $t('contact.availability') }}
      </span>
    </div>
  </section>
</template>
