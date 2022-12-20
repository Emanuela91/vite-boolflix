<script>
import axios from 'axios';
import HeaderVue from './components/Header.vue';
import CharactersListVue from './components/CharactersList.vue';
import SearchVue from './components/Search.vue';

import { store } from './store.js';

export default {
  name: "App",
  components: {
    HeaderVue,
    CharactersListVue,
    SearchVue
  },

  methods: {
    getFilm() {
      // metodo per fare la ricerca con apiUrl diverso
      let myUrl = store.apiURL;

      if (store.SearchText !== "") {
        myUrl = `https://api.themoviedb.org/3/search/multi?${store.apiKey}&query=${store.SearchText} `
      }

      // chiamata per far comparire i film sia per la pagina normale che per la ricerca
      axios
        .get(myUrl)
        .then(res => {
          store.characterList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        });
    }
  },
  mounted() {
    this.getFilm();
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <header>
    <HeaderVue msg="Boolfix" />
    <SearchVue @cerca="getFilm" />
  </header>
  <main>
    <CharactersListVue />
  </main>
</template>

<style lang="scss">
@use './style/generals.scss';
</style>

