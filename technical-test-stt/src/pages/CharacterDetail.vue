<script setup>
import { reactive, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCharacterApi } from '../services/rick-and-morty';
import ListEpisodes from '../components/ListEpisodes.vue';
import Loader from '../components/Loader.vue';
import Comments from '../components/Comments.vue';
const route = useRoute()


const characterId = ref(route.params.id)
const character = ref({})
const ready = ref(false)
// characterId.value = route.params.id

onMounted(() => {
    getCharacter()
})

const getCharacter = () => {
    getCharacterApi(characterId.value)
    .then(res => {
        character.value = res.data.data.character
        ready.value = true
    })
    .catch(err => console.error(err))
}
</script>

<template>
    <Loader v-if="!ready"></Loader>
    <div v-else class="col character-detail">
        <h2><router-link to="/characters">Characters</router-link> > Character detail</h2>
        <div class="detail-info">
            <img :src="character.image" alt="character-img" class="character-img">
            <div class="col">
                <h1 class="name">{{character.name}}</h1>
                <h1><strong>Estado:</strong> {{character.status}}</h1>
                <h1><strong>especie</strong>: {{character.species}}</h1>
                <h1><strong>genero</strong>: {{character.gender}}</h1>
                <h1><strong>ubicacion</strong>: {{character.location?.name}}</h1>
            </div>
        </div>
        <br>
       <ListEpisodes :episodes="character.episode"></ListEpisodes>
       <Comments></Comments>
    </div>
</template>


<style>
    .character-detail{
        gap: 10px;
        color: #97ce4c;
    }

    .detail-info{
        display: flex;
        flex-direction: row;
        gap: 60px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .character-img{
        width: 100%;
        max-width: 300px;
        border-radius: 10%;
    }
    
    .name{
        font-size: 4rem;
        font-weight: 700 ;
    }

    strong{
        font-weight: 700;
    }
</style>
