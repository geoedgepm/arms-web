import axios from 'axios'

const api = (option: any) => axios({
   baseURL: 'http://localhost:8000/api',
   ...option
})

const responseTransformer = (response: any) => {
   return new Promise((resolve, reject) => {
      response
         .then((response: any) => resolve(response.data))
         .catch((error: any) => reject(error));
      })
}

export {
   api,
   responseTransformer
} 