<template>
    <div class="navbarComponent">
        <nav class="navbar">
            <div class="navLogo">Logo</div>
            <ul class="itemsBox">
                <li class="navItem" to="/">Home</li>
                <li class="navItem">Weather Section</li>
                <li class="navItem">About</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarComponent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.navbar {
    position: fixed;
    top: 0;
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
    list-style-type: none;
    color: white;
}
</style>
