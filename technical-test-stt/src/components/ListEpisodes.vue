<script setup>

const props = defineProps({
    episodes: Array
})
</script>

<template>
    <div class="col">
        <h1 style="font-size: 3rem;">Lista de episodios</h1>
        <div class="col episodes custom-scroll">
            <div v-for="episode in episodes" class="row episode">
                {{episode.episode}} - {{episode.name}}
            </div>
        </div>
    </div>
</template>

<style>
.episodes{
    gap: 20px;
    max-height: 50vh;
    overflow: auto;
}


.episode{
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 5px #a4d06647;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 2px;
}

.episode:hover{
    background-color: #a4d06647;
    box-shadow: 0 0 5px #a4d06647;
}
</style>