<script setup lang="ts">
interface Skill {
  name: string
  icon: string
  rating: number
}

const skills: Skill[] = [
  {
    name: 'Java',
    icon: 'fa-brands fa-java',
    rating: 4,
  },
  {
    name: 'PHP',
    icon: 'fa-brands fa-php',
    rating: 5,
  },
  {
    name: 'Angular',
    icon: 'fa-brands fa-angular',
    rating: 4,
  },
  {
    name: 'Vue.js',
    icon: 'fa-brands fa-vuejs',
    rating: 4,
  },
  {
    name: 'AWS',
    icon: 'fa-brands fa-aws',
    rating: 4,
  },
  {
    name: 'Docker',
    icon: 'fa-brands fa-docker',
    rating: 3,
  },
  {
    name: 'Git',
    icon: 'fa-brands fa-git-alt',
    rating: 4,
  },
  {
    name: 'Jenkins',
    icon: 'fa-solid fa-gears',
    rating: 4,
  },
  {
    name: 'JavaScript',
    icon: 'fa-brands fa-js',
    rating: 5,
  },
  {
    name: 'Ansible',
    icon: 'fa-solid fa-server',
    rating: 3,
  },
]
</script>

<template>
  <section class="skills">
    <h2>
      {{ $t('about.skills.title') }}
    </h2>

    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <div class="skill-info">
          <i :class="skill.icon"></i>

          <span>
            {{ skill.name }}
          </span>
        </div>

        <div class="stars" :aria-label="`${skill.rating} / 5`">
          <i
            v-for="star in 5"
            :key="star"
            :class="star <= skill.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 70px 4vw 100px;
}

h2 {
  margin: 0 0 30px;

  color: var(--crimson);

  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 12px 30px;
}

.skill-card {
  min-height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;

  padding: 14px 22px;

  border: 1px solid var(--border);
}

.skill-info {
  display: flex;
  align-items: center;

  gap: 18px;

  font-size: 0.95rem;
  font-weight: 600;
}

.skill-info i {
  width: 32px;

  color: var(--crimson);

  font-size: 1.8rem;
  text-align: center;
}

.stars {
  display: flex;

  gap: 7px;

  color: var(--crimson);

  font-size: 0.85rem;
}

/* Tablette */

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile */

@media (max-width: 768px) {
  .skills {
    padding: 50px 20px 70px;
  }

  .skill-card {
    padding: 14px 16px;
  }

  .skill-info {
    gap: 12px;

    font-size: 0.85rem;
  }

  .skill-info i {
    font-size: 1.4rem;
  }

  .stars {
    gap: 4px;

    font-size: 0.75rem;
  }
}

@media (max-width: 400px) {
  .skill-card {
    gap: 10px;
  }

  .stars {
    gap: 3px;
  }
}
</style>
