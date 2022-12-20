<script>

export default {
    name: "SingleCharacter",
    props: ["info"],
}
</script>

<template>
    <!-- card -->
    <div class="text-center">
        <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" :alt="info.title">

        <!-- da mettere in hover -->
        <!-- <div class="caratt">
            <h4>{{ info.title }} </h4>
            <div>{{ info.original_title }}</div>
            <div>{{ info.original_language }}</div>
            <div>{{ info.vote_average }}</div>
        </div> -->

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.text-center {
    margin: 10px 0;



}
</style>