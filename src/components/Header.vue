<script>

import axios from 'axios';
import { store } from '../store';


export default {
    name: "Header",
    props: ["msg"],

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
    </header>

</template>

<style lang="scss" scoped>
h1 {
    font-weight: bold;
}
</style>