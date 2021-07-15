<template>
    <div class="cardDetailTitle">
        <ul v-for="(city, id) in cities" :key="id">
            <li>Name{{ city.name }}</li>
        </ul>
    </div>

    <!-- <h1 class="cardDetailTitle">Card Detail Page</h1> -->
</template>

<script>
export default {
    props: {
        cities: {
            type: Array,
            required: true,
        },
    },
    name: "CardDetail",
};
</script>

<style scoped>
.cardDetailTitle {
    position: absolute;
    top: 20%;
    left: 40%;
}
</style>
