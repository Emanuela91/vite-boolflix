<script>
import { store } from '../store';

export default {
    name: "Search",
    data() {
        return {
            store,
        }
    }


}

</script>



<template>
    <div class="container">
        <form>
            <label for="search-film"></label>
            <input type="text" id="search-film" placeholder="Cerca film o serie tv" v-model="store.SearchText">
            <button type="submit" @click.prevent="$emit('cerca')">Cerca</button>
        </form>
    </div>
</template>



<style lang="scss" scoped>

</style>