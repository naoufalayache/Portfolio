<template>
  <section class="motivation">
    <h2>
      {{ $t('about.motivation.title') }}
    </h2>

    <div class="motivation__content">
      <p>
        {{ $t('about.motivation.paragraph1') }}
      </p>

      <p>
        {{ $t('about.motivation.paragraph2') }}
      </p>

      <p>
        {{ $t('about.motivation.paragraph3') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.motivation {
  padding: 70px 4vw;

  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

h2 {
  margin: 0 0 30px;

  color: var(--crimson);

  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.motivation__content {
  max-width: 700px;
}

p {
  margin: 0 0 12px;

  font-size: 1rem;
  line-height: 1.8;
}

p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .motivation {
    padding: 50px 20px;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
