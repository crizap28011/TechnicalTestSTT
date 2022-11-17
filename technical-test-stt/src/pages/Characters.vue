<script setup>
import { ref, reactive, onMounted } from 'vue'
import { listCharacters, searchCharacterByName } from '../services/rick-and-morty'
import ListCharacters from '../components/ListCharacters.vue';
import Loader from '../components/Loader.vue';

const characters = ref([])
const page = ref(1)
const search = ref("")
const ready = ref(false)

onMounted(() => {
    ready.value = false
    getListCharacters()

})

const getListCharacters = () => {
    listCharacters({ page: page.value, name: search.value})
    .then(res => {
        characters.value = res.data.data.characters.results
        ready.value = true
    })
    .catch(err => console.error(err))
}

const nextPage = () => {
    page.value++
    getListCharacters()
    toTop()
}

const prevPage = () => {
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

const sortAZ = () => {
    characters.value.sort((a, b) => a.name.localeCompare(b.name))
}

const sortZA = () => {
    characters.value.sort((a, b) => b.name.localeCompare(a.name))
}

const searchCharacter = () => {
    page.value = 1
    getListCharacters()
}



</script>

<template>
    <Loader v-if="!ready"></Loader>
    <template v-else>
        <h1 class="title">Rick And Morty Page</h1>
        <div class="col">
            <input v-model="search" @input="searchCharacter" placeholder="Busqueda por nombre..." class="search-input" type="text">
            <div class="row g-1">
                <button @click="sortAZ">Ordenar A-Z</button>
                <button @click="sortZA">Ordenar Z-A</button>
            </div>
        </div>
        <br>
        <ListCharacters :characters="characters"></ListCharacters>
        <br>
        <div class="navegation-buttons">
            <button  v-show="page !== 1" @click="prevPage">Prev</button>
            <strong class="page">{{ page }}</strong>
            <button @click="nextPage">Next</button>
        </div>
    </template>
</template>

<style>
.title{
    font-size: 4rem;
    padding-bottom: 20px;
    color: #97ce4c;
    font-weight: 700;
}
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

.search-input{
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    color: #97ce4c;
    padding: 10px;
    margin-bottom: 20px;
    border-color: #97ce4c;
}

.search-input:active{
    border-color: #97ce4c;
}

.page{
    padding: 10px;
    vertical-align: middle;
}
</style>