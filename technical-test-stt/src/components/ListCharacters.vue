<script setup>
    import CharacterCard from './CharacterCard.vue'
    const props = defineProps({
        characters: Array
    })

</script>

<template>
    <div class="list-characters">
        <CharacterCard v-for="character in characters" :key="character.id"
        :id="character.id"
        :name="character.name"
        :image="character.image"
        :status="character.status"
        :species="character.species"
        :gender="character.gender"
        :location="character.location"
        :episodeCount="character.episode.length"
        ></CharacterCard>
    </div>
</template>

<style>
    .list-characters{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 20px;
    }
</style>