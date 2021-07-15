<template>
    <div>
        <search-bar class="searchBar" @city-submitted="addCity" />
        <h1 class="weatherTitle">To find a city, type the name above</h1>
        <card-city :cities="cities"></card-city>
    </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import CardCity from "./CardCity.vue";

export default {
    components: { SearchBar, CardCity },
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
</style>
