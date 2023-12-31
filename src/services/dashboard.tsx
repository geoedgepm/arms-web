import { api, responseTransformer } from './api'

export function getRiskCount() {
   const result =  api({
      method: "GET",
      headers: {},
      url: 'dashboard/risk_count'
    });

   return responseTransformer(result);
}