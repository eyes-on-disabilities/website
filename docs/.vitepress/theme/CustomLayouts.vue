<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { Layout } = DefaultTheme;
const { lang } = useData();
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="custom-hero-image"></div>
    </template>

    <template #layout-bottom>
      <footer v-if="frontmatter.layout == 'home'">
        <div class="container">
          <div class="items">
            <div class="item grid-2 brands">
              <a href="https://ifb-stiftung.de">
                <img class="brand-image" src="/logo_ifb.svg" />
              </a>
              <span class="brand-plus">+</span>
              <a href="https://cccwi.de">
                <img class="brand-image" src="/logo_cccwi.jpg" />
              </a>
            </div>
            <div class="item grid-2 footer-text">
              <div v-if="lang === 'en-US'">
                <p>
                  A cooperation between
                  <a href="https://ifb-stiftung.de">IFB-Stiftung</a> and
                  <a href="https://cccwi.de">
                    Chaos Computer Club Wiesbaden e.V.
                  </a>
                </p>
                <p>
                  <a href="/06-miscellaneous/imprint.html">Imprint</a>
                  &nbsp;
                  <a href="/06-miscellaneous/privacy.html">Privacy</a>
                </p>
              </div>
              <div v-else>
                <p>
                  Eine Kooperation der
                  <a href="https://ifb-stiftung.de">IFB-Stiftung</a> und des
                  <a href="https://cccwi.de">
                    Chaos Computer Club Wiesbaden e.V.
                  </a>
                </p>
                <p>
                  <a href="/de/06-miscellaneous/imprint.html">Impressum</a>
                  &nbsp;
                  <a href="/de/06-miscellaneous/privacy.html">Datenschutz</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </template>
  </Layout>
</template>

<style scoped>
.custom-hero-image {
  background-image: url("/our-eye-tracking-glasses.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
}

footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  padding: 50px 24px;
  background-color: var(--vp-c-bg-alt);
}

.container {
  margin: 0 auto;
  max-width: 960px;
}

.items {
  display: flex;
  flex-wrap: wrap;
}

.item {
  padding: 8px;
  width: 100%;
}

.brands {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.brand-image {
  height: 60px;
}

.brand-plus {
  font-size: 3em;
  font-weight: 500;
}

.footer-text {
  text-align: center;
}

@media (min-width: 960px) {
  .item.grid-2 {
    width: calc(100% / 2);
  }
  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
  .item.grid-4 {
    width: calc(100% / 4);
  }
  .footer-text {
    text-align: right;
  }
  .brand-image {
    height: 70px;
  }
}

p {
  margin-bottom: 12px;
}

a {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color 0.25s,
    opacity 0.25s;
  white-space: nowrap;
}

a:hover {
  color: var(--vp-c-brand-2);
}
</style>
