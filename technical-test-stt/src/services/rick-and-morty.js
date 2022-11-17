import axios from 'axios'

const BASE_URL = "https://rickandmortyapi.com/graphql"


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
    }`,
    listCharacters: (page, name) => `{
      characters(page: ${page}, filter: {name: "${name}"}){
        results{
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
            episode
          }
        }
      }
    }`,
    searchCharacterByName: (page, name) => `{
      characters(page: ${page}, filter: {name: "${name}"}){
        results{
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
            episode
          }
        }
      }
    }`
}

export const listCharacters = ({ page = 1, name="" }) => {
    return axios.post(BASE_URL, {
        query: queries.listCharacters(page, name)
    })
}

export const getCharacterApi = (id) => {
    return axios.post(BASE_URL, {
        query: queries.getCharacters(id)
    })
}


export const searchCharacterByName = (page, name) => {
  return axios.post(BASE_URL, {
      query: queries.searchCharacterByName(page, name)
  })
}