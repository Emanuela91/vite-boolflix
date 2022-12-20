<script>

import axios from 'axios';
import { store } from '../store';
import SearchVue from './Search.vue';


export default {
    name: "Header",
    props: ["msg"],
    components: {
        SearchVue

    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header class="container">
        <h1 class="text-center my-5">
            {{ msg }}
        </h1>
        <SearchVue />

    </header>

</template>

<style lang="scss" scoped>
h1 {
    font-weight: bold;
}
</style>