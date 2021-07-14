<template>
    <div>
        <nav class="navbar">
            <div class="navLogo">Logo</div>
            <ul class="itemsBox">
                <router-link class="navItem" :to="{ name: 'Home' }"
                    >Home</router-link
                >
                <router-link class="navItem" :to="{ name: 'Weather' }"
                    >Weather Section</router-link
                >
                <router-link class="navItem" :to="{ name: 'About' }"
                    >About</router-link
                >
            </ul>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
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

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background: #c70039;
}

.navLogo {
    position: absolute;
    top: 30%;
    left: 15%;
    font-weight: bold;
    font-size: x-large;
    color: white;
}

.itemsBox {
    transform: translate(250%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 25%;
    height: 100%;
    margin: 0;
}

.navItem {
    text-decoration: none;
    list-style-type: none;
    color: white;
}
</style>
