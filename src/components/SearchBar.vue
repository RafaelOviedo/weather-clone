<template>
    <form
        class="formContainer"
        @submit.prevent="searchCity(inputValue.cityInput)"
    >
        <input
            type="text"
            class="textBox"
            placeholder="Type your city here..."
            v-model="inputValue.cityInput"
        />
        <input type="submit" name="submit" class="submitButton" />
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "SearchBar",
    data() {
        return {
            inputValue: {
                cityInput: "",
            },
        };
    },
    methods: {
        async searchCity(citySearched) {
            let cityFetched = await axios(
                `https://api.openweathermap.org/data/2.5/weather?q=${citySearched}&appid=b962bea41d7b3b0eb8d8dfb7906e2978&units=metric`
            );
            let cityData = cityFetched.data;
            console.log(cityData);
            if (cityData.main !== undefined) {
                let city = {
                    min: Math.round(cityData.main.temp_min),
                    max: Math.round(cityData.main.temp_max),
                    img: cityData.weather[0].icon,
                    id: cityData.id,
                    wind: cityData.wind.speed,
                    temp: cityData.main.temp,
                    name: cityData.name,
                    weather: cityData.weather[0].main,
                    clouds: cityData.clouds.all,
                    latitude: cityData.coord.lat,
                    length: cityData.coord.lon,
                };
                console.log(city);
                this.$emit("city-submitted", city);
            } else {
                alert("City not found");
            }
            this.inputValue.cityInput = "";
        },
    },
};
</script>

<style scoped>
.formContainer {
    width: 25%;
    height: 5%;
}

.textBox {
    width: 50%;
    height: 60%;
    border-radius: 20px 0 0 20px;
    border: 2px solid grey;
    border-right: none;
    outline: none;
}

.submitButton {
    width: 20%;
    height: 75%;
    border-radius: 0 20px 20px 0;
    border: 2px solid grey;
    border-left: none;
    background: black;
    color: white;
}
</style>
