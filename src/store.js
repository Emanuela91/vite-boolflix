import { reactive } from 'vue';

export const store = reactive({
    characterList: [],
    apiKey: "api_key=0bdde67893be9f43e51ab6559cd46acd",
    apiURL: "https://api.themoviedb.org/3/movie/popular?api_key=0bdde67893be9f43e51ab6559cd46acd",
});