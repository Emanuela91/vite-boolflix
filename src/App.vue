<script>
import axios from 'axios';
import HeaderVue from './components/Header.vue';
import CharactersListVue from './components/CharactersList.vue';

import { store } from './store.js';

export default {
  name: "App",
  components: {
    HeaderVue,
    CharactersListVue,
  },

  methods: {
    getCharacters() {

      axios
        .get(store.apiURL)
        .then(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    }
  },
  mounted() {
    this.getCharacters();
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

