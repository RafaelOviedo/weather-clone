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
                <router-link
                    :to="{ name: 'CardDetail', params: { id: city.id } }"
                    class="moreInfo"
                    :cities="cities"
                >
                    More info</router-link
                >
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
        "image   image   image   image"
        "info    info    info    info";
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
    transform: translate(47%);
    grid-area: image;
}

.moreInfo {
    grid-area: info;
    text-decoration: none;
}
</style>
