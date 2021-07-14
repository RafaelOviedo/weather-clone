<template>
    <div>
        <search-bar class="searchBar" />
        <h1 class="weatherTitle">To find a city, type the name above</h1>
    </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
    components: { SearchBar },
    name: "Weather",
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
