import axios from "axios"

const BASE_URL = "http://localhost:3000/characters"

export const listCommentsByCharacterId = (id) => {
    return axios.get(`${BASE_URL}/${id}/comments`)
}

export const createComment = (comment, characterId) => {
    return axios.post(`${BASE_URL}/${characterId}/comments`, comment)
}


