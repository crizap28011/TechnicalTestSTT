<script setup>
import { ref, reactive, onMounted } from 'vue'
import { listCharacters } from '../services/rick-and-morty'
import ListCharacters from '../components/ListCharacters.vue';
import Loader from '../components/Loader.vue';

const state = reactive({
    characters: [],
    page: 1
})

const characters = ref([])
const page = ref(1)
const ready = ref(false)

onMounted(() => {
    getListCharacters()
})

const getListCharacters = () => {
    ready.value = false
    listCharacters({ page: state.page })
    .then(res => {
        state.characters = res.data.results
        characters.value = res.data.results
        ready.value = true
    })
    .catch(err => console.error(err))
}

const nextPage = () => {
    state.page++
    page.value++
    getListCharacters()
    toTop()
}

const prevPage = () => {
    state.page--
    page.value--
    getListCharacters()
    toTop()
}

const toTop = () => {
    window.scrollTo({
        top: 0,
        // left: 0,
        behavior: 'smooth'
    })
}



</script>

<template>
    <Loader v-if="!ready"></Loader>
    <template v-else>
        <h1>Lista personajes</h1>
        <ListCharacters :characters="characters"></ListCharacters>
        <br>
        <div class="navegation-buttons">
            <button v-show="page !== 1" @click="prevPage">Prev</button>
            <strong class="page">{{ page }}</strong>
            <button @click="nextPage">Next</button>
        </div>
    </template>
</template>

<style>
.navegation-buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.navegation-buttons button{
    padding: 10px 20px;
    background-color: #97ce4c;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
}

.navegation-buttons button:active{
    box-shadow: 1px 1px 3px #ccc;
}

.page{
    padding: 10px;
    vertical-align: middle;
}
</style>