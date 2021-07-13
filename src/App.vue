<template>
    <div>
        <Navbar />
        <About />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";

export default {
    name: "App",
    components: {
        Navbar,
        About,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
