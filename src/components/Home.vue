<template>
    <div class="homeContainer">
        <h1 class="homeTitle">Weather app clone</h1>
        <p class="homeSubtitle">To see the weather go to the Weather Section</p>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.homeContainer {
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
}

.homeTitle {
    position: absolute;
    top: 25%;
    left: 20%;
    z-index: 5;
    color: black;
    font-size: xx-large;
}

.homeSubtitle {
    position: absolute;
    top: 30%;
    left: 17%;
    z-index: 5;
    color: black;
    font-size: xx-large;
}
</style>
