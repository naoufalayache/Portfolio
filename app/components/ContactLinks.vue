<script setup lang="ts">
interface ContactItem {
  id: string
  icon: string
  label: string
  value: string
  href?: string
}

const contacts: ContactItem[] = [
  {
    id: 'email',
    icon: 'fa-regular fa-envelope',
    label: 'contact.links.email',
    value: 'naoufalayache@gmail.com',
    href: 'mailto:naoufalayache@gmail.com',
  },
  {
    id: 'linkedin',
    icon: 'fa-brands fa-linkedin-in',
    label: 'contact.links.linkedin',
    value: 'contact.links.mon_linkedin',
    href: 'https://www.linkedin.com/in/naoufal-ayache',
  },
  {
    id: 'github',
    icon: 'fa-brands fa-github',
    label: 'contact.links.github',
    value: 'github.com/naoufalayache',
    href: 'https://github.com/naoufalayache',
  },
  {
    id: 'location',
    icon: 'fa-solid fa-location-dot',
    label: 'contact.links.location',
    value: 'Lyon, France',
  },
]
</script>

<template>
  <section class="contact-links">
    <div v-for="contact in contacts" :key="contact.id" class="contact-link">
      <div class="contact-link__icon">
        <i :class="contact.icon"></i>
      </div>

      <div class="contact-link__content">
        <span class="contact-link__label">
          {{ $t(contact.label) }}
        </span>

        <a
          v-if="contact.href"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link__value"
        >
          {{ $t(contact.value) }}
        </a>

        <span v-else class="contact-link__value">
          {{ contact.value }}
        </span>
      </div>

      <a
        v-if="contact.href"
        :href="contact.href"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-link__arrow"
        :aria-label="$t(contact.label)"
      >
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </section>
</template>
<style scoped src="@/assets/CSS/ContactLinks.css"></style>
