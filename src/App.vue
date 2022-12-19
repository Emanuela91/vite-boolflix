<script>
import axios from 'axios';
import HeaderVue from './components/Header.vue';
import CharactersListVue from './components/CharactersList.vue';

import { store } from './store.js';

export default {
  name: "App",
  components: {
    HeaderVue,
    CharactersListVue
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <HeaderVue msg="Boolfix" />
  <main>
    <CharactersListVue />
  </main>
</template>

<style lang="scss">
@use './style/generals.scss';
</style>

