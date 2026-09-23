<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <RouterLink to="/" class="header__logo">
        <img
          :src="siteConfig.logo.src"
          :alt="siteConfig.logo.alt"
          class="header__logo-img"
          width="220"
          height="56"
          decoding="async"
        />
      </RouterLink>

      <nav class="header__nav" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="header__link"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="header__actions">
        <a :href="`tel:${siteConfig.contact.phoneTel}`" class="header__phone">
          {{ siteConfig.contact.phone }}
        </a>
        <RouterLink to="/apply" class="btn btn--primary header__cta">Enroll now</RouterLink>
        <button
          type="button"
          class="header__toggle"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="header__toggle-bar" />
          <span class="header__toggle-bar" />
        </button>
      </div>
    </div>

    <nav v-if="mobileOpen" id="mobile-nav" class="header__mobile" aria-label="Mobile navigation">
      <div class="container">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="header__mobile-link"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <a :href="`tel:${siteConfig.contact.phoneTel}`" class="header__mobile-phone" @click="mobileOpen = false">
          {{ siteConfig.contact.phone }}
        </a>
        <RouterLink to="/apply" class="btn btn--primary btn--block" @click="mobileOpen = false">
          Enroll now
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { siteConfig } from "@/data/site";

const mobileOpen = ref(false);
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 8;
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.82);
  border-bottom: 1px solid transparent;
  backdrop-filter: blur(16px);
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.header--scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: none;
  background: rgba(255, 255, 255, 0.95);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 4rem;
}

@media (min-width: 1024px) {
  .header__inner {
    min-height: 4.25rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
}

.header__logo {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
}

.header__logo:hover {
  text-decoration: none;
}

.header__logo-img {
  display: block;
  width: auto;
  height: clamp(2.75rem, 8vw, 3.25rem);
  max-width: min(220px, 52vw);
  object-fit: contain;
  object-position: left center;
}

.header__nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

@media (min-width: 1024px) {
  .header__nav {
    display: flex;
    justify-self: center;
  }
}

.header__link {
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}

.header__link:hover,
.header__link.router-link-exact-active {
  color: var(--color-ink);
  background: var(--color-muted-bg);
  text-decoration: none;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-self: end;
}

.header__phone {
  display: none;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  white-space: nowrap;
}

.header__phone:hover {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.header__cta {
  display: none;
}

@media (min-width: 640px) {
  .header__cta {
    display: inline-flex;
  }
}

@media (min-width: 1024px) {
  .header__phone {
    display: block;
  }
}

.header__toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-white);
  cursor: pointer;
}

@media (min-width: 1024px) {
  .header__toggle {
    display: none;
  }
}

.header__toggle-bar {
  display: block;
  width: 18px;
  height: 2px;
  margin: 0 auto;
  background: var(--color-ink);
  border-radius: 1px;
}

.header__mobile {
  border-top: 1px solid var(--color-border);
  background: var(--color-white);
  padding: 0.75rem 0 1.25rem;
  animation: hero-fade-up 0.25s var(--ease-out-expo) both;
}

@media (min-width: 1024px) {
  .header__mobile {
    display: none;
  }
}

.header__mobile-link {
  display: block;
  padding: 0.75rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-ink);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
}

.header__mobile-link:hover {
  color: var(--color-primary);
  text-decoration: none;
}

.header__mobile-phone {
  display: block;
  padding: 1rem 0 0.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-primary);
  text-decoration: none;
}

.header__mobile .btn {
  margin-top: 1rem;
}
</style>
