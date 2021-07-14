<template>
    <form class="formContainer">
        <input type="text" class="textBox" />
        <input type="submit" name="submit" class="submitButton" />
    </form>
</template>

<script>
export default {
    name: "SearchBar",
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
