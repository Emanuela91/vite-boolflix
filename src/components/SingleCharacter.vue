<script>

export default {
    name: "SingleCharacter",
    props: ["info"],

    data() {
        return {
            countryFlags: [
                {
                    img: "img/germania.png",
                    lang: "de"
                },
                {
                    img: "img/inglese.png",
                    lang: "en"
                },
                {
                    img: "img/italia.png",
                    lang: "it"
                },
                // bandiera della pace per al posto delle bandiere assenti
                {
                    img: "img/pace.png",
                    lang: ""
                },

            ]

        }
    },

    computed: {
        // funzione per mettere le bandiere
        getFlags() {
            for (let i = 0; i < this.countryFlags.length; i++) {
                if (this.countryFlags[i].lang.includes(this.info.original_language)) {
                    return this.countryFlags[i].img
                }
            }
            return this.countryFlags[this.countryFlags.length - 1].img
        },

        // funzione per trasformare il voto da 1 a 10 a 1 a 5 con Mathround per approssimare
        votoArro() {
            const voto = Math.round(this.info.vote_average / 2);
            return voto;
        }
    }
}
</script>

<template>
    <!-- card -->
    <div class="text-center">
        <img :src="`https://image.tmdb.org/t/p/w342${info.poster_path}`" :alt="info.title">

        <!-- da mettere in hover -->
        <div class="caratt">
            <h4>{{ info.title }} {{ info.name }} </h4>
            <div>{{ info.original_title }}</div>
            <!-- <div>{{ info.original_language }}</div> -->
            <img :src="getFlags">
            <!-- <div> Voto: {{ votoArro }}</div> -->
            <div class="star">
                <span id="star" v-for="star in votoArro">
                    <font-awesome-icon icon="fa-solid fa-star" />
                </span>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss';

.text-center {
    margin: 10px 0;

    .caratt {
        img {
            width: 20px;
        }

        .star {
            span {
                color: yellow;
            }
        }
    }
}
</style>