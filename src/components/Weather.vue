<template>
    <div>
        <search-bar class="searchBar" @city-submitted="addCity" />
        <h1 class="weatherTitle">To find a city, type the name above</h1>
        <ul class="cardsContainer">
            <li v-for="(city, id) in cities" :key="id" class="cityCard">
                <button class="cardXbutton">&times;</button>
                <p class="cardName">{{ city.name }}</p>
                <p class="cardMinTemp">Min temp: {{ city.min }}</p>
                <p class="cardMaxTemp">Max temp: {{ city.max }}</p>
                <img
                    class="weatherIcon"
                    src="http://openweathermap.org/img/wn/{{city.img}}@2x.png"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
    components: { SearchBar },
    name: "Weather",
    data() {
        return {
            cities: [],
        };
    },
    methods: {
        addCity(city) {
            this.cities.push(city);
        },
    },
};
</script>

<style scoped>
.weatherTitle {
    position: absolute;
    top: 17%;
    left: 40%;
    font-size: larger;
}

.searchBar {
    position: absolute;
    top: 12%;
    left: 38%;
}

.cardsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: absolute;
    top: 20%;
    left: 0;
    width: 97.2%;
    height: 70vh;
}

.cityCard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
        "button button button button"
        "title  title  title  title"
        "min    min    max    max"
        "image   image   image   image";
    list-style-type: none;
    margin-top: 2%;
    width: 20%;
    height: 30%;
    border: 2px solid black;
    border-radius: 10px;
}

.cardXbutton {
    transform: translate(702%);
    grid-area: button;
    width: 12.5%;
    height: 100%;
    border-radius: 0 10px 0 0;
    border: none;
    cursor: pointer;
}

.cardName {
    grid-area: title;
}

.cardMinTemp {
    grid-area: min;
}

.cardMaxTemp {
    grid-area: max;
}

.weatherIcon {
    transform: translate(50%);
    grid-area: image;
}
</style>

display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr
1fr 1fr 1fr 1fr; grid-template-areas: "button button button button" "title title
title title" "props1 props1 props2 props2" "info1 info1 info2 info2" "image
image image image"; background: white; width: 320px; height: 230px;
border-radius: 15px; margin-top: 70px; position: relative; top: 15%; }
