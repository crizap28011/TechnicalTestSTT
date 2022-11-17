<script setup>
    const props = defineProps({
        id: Number,
        name: String,
        image: String,
        status: String,
        species: String,
        gender: String,
        location: Object,
        episodeCount: Number
    })
</script>

<template>
    <router-link :to="`/characters/${id}`" class="card">
        <h1 class="card-title">{{name}}</h1>
        <img :src="image" :alt="image" class="card-image">
        <h3><strong>Estado:</strong> {{status}}</h3>
        <h3>especie: {{species}}</h3>
        <h3>genero: {{gender}}</h3>
        <h3>ubicacion: {{location.name}}</h3>
        <h3>cantidad de episodios: {{episodeCount}}</h3>
    </router-link>
</template>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap:5px;
        cursor: pointer;
        padding: 10px 20px;
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 0 5px #a4d06647;
    }

</style>