<script>

export default {
    name: "SingleCharacter",
    props: ["info"],
}
</script>

<template>
    <!-- card -->
    <div class="text-center">
        <img :src="info.poster_path" :alt="info.title">
        <h4>{{ info.title }} </h4>
        <div>{{ info.original_title }}</div>
        <div>{{ info.original_language }}</div>
        <div>{{ info.vote_average }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.text-center {
    margin: 10px 0;

}
</style>