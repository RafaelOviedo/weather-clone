<template>
    <div>
        <search-bar class="searchBar" @city-submitted="addCity" />
        <h1 class="weatherTitle">To find a city, type the name above</h1>
        <ul class="cardsContainer">
            <li v-for="(city, id) in cities" :key="id" class="cityCard">
                <button class="cardXbutton" @click="removeCard(city.id)">
                    &times;
                </button>
                <p class="cardName">{{ city.name }}</p>
                <p class="cardMinTemp">Min temp: {{ city.min }}</p>
                <p class="cardMaxTemp">Max temp: {{ city.max }}</p>
                <img
                    class="weatherIcon"
                    :src="`http://openweathermap.org/img/wn/${city.img}@2x.png`"
                />
                <br />
                <p class="aditionalInfo">
                    <strong>Aditional city info</strong>
                </p>
                <br />
                <p class="cardTemp">Temperature: {{ city.temp }}</p>
                <p class="cardWeather">Weather: {{ city.weather }}</p>
                <p class="cardWind">Wind: {{ city.wind }}</p>
                <p class="cardClouds">Clouds: {{ city.clouds }}</p>
                <p class="cardLatitude">Latitude: {{ city.latitude }}</p>
                <p class="cardLength">Length: {{ city.length }}</p>
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
        removeCard(id) {
            this.cities = this.cities.filter((city) => city.id !== id);
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
    left: 0%;
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
        "image   image   image   image"
        "info    info    info    info"
        "temp    temp    weath   weath"
        "wind    wind    clouds  clouds"
        "lat     lat     length  length";
    list-style-type: none;
    margin-top: 2%;
    margin-right: 5%;
    width: 20%;
    height: 82.5%;
    border: 2px solid black;
    border-radius: 10px;
}

.cardXbutton {
    transform: translate(569%, -2%);
    grid-area: button;
    width: 15%;
    height: 70%;
    border-radius: 0 10px 0 5px;
    border: none;
    cursor: pointer;
    background: crimson;
    color: white;
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
    width: 25%;
    height: 100%;
    border-radius: 50%;
    background: lightgray;
    transform: translate(150%);
    grid-area: image;
}

.aditionalInfo {
    grid-area: info;
}

.cardTemp {
    grid-area: temp;
}
.cardWeather {
    grid-area: weath;
}
.cardWind {
    grid-area: wind;
}
.cardClouds {
    grid-area: clouds;
}
.cardLatitude {
    grid-area: lat;
}
.cardLength {
    grid-area: length;
}
</style>
