<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { listCommentsByCharacterId, createComment } from '../services/comments'

const route = useRoute()
const props = defineProps({
        Comments: Array,
})
const comments = ref([])
const comment = ref("")
const characterId = ref(route.params.id)

onMounted(() => {
    console.log({characterId: characterId.value});
    listComments()
})

const listComments = () => {
    listCommentsByCharacterId(characterId.value)
    .then(res => {
        console.log(res.data)
        comments.value = res.data
    })
    .catch(err => console.error(err))
}

const saveComment = () => {
    console.log(comment.value);
    const params = {
        comment: comment.value,
        user: "Cristian Zapata",
    }
    console.log(params);
    createComment(params, characterId.value)
    .then(res => {
        console.log(res)
        comment.value = ""
        listComments()
    })
    .catch(err => console.error(err))
}



</script>

<template>
    <div class="comments col">
        <h1 style="font-size: 3rem;">Comentarios</h1>
        <textarea v-model="comment" rows="3" class="comment-input" type="text"></textarea>
        <div class="col save-button">
            <button @click="saveComment">Guardar</button>
        </div>
        <div class="col list-comments">
            <div class="col comment" v-for="comment in comments">
                <h3>{{comment.user}}</h3>
                <h1>{{comment.comment}}</h1>
            </div>
        </div>
    </div>
</template>

<style>
.comments{
    gap: 10px;
}
.comment-input{
    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
    color: #97ce4c;
    padding: 10px;
}

.list-comments{
    gap: 10px
}

.comment{
    box-shadow: 0px 0px 3px #97ce4c;
    border-radius: 20px;
    padding: 10px;
}

.comment h3{
    font-weight: 700;
}

.save-button{
    min-width: 100%;
    align-items: end;
    max-width: fit-content;
}
</style>