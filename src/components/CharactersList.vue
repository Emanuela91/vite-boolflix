<script>
import SingleCharacterVue from './SingleCharacter.vue';

import { store } from '../store.js';

export default {
    name: "CharactersList",
    components: {
        SingleCharacterVue
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="container">
        <div class="d-flex flex-row flex-wrap">
            <!-- ciclo for per creare tutti i personaggi -->
            <div v-for="character in store.characterList" :key="character.id">
                <!-- card importata da single character-->
                <SingleCharacterVue :info="character" />

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>