import axios from 'axios'

const BASE_URL = "https://rickandmortyapi.com/api"


const queries = {
    getCharacters: (id) => `{
        character(id: ${id}) {
          id
          name
          image
          status
          species
          gender
          location{
            name
          }
          episode{
            name
            episode
          }
        }
      }`
}

export const listCharacters = ({ page = 0 }) => {
    return axios.get(`${BASE_URL}/character/?page=${page}`)
}

export const getCharacterApi = (id) => {

    return axios.post("https://rickandmortyapi.com/graphql", {
        query: queries.getCharacters(id)
    })

}