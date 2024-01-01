import { api, responseTransformer } from './api'

export function getRisks() {
   const result =  api({
      method: "GET",
      headers: {},
      url: 'risks'
    });

   return responseTransformer(result);
}