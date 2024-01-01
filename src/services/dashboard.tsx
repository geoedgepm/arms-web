import { api, responseTransformer } from './api'

export function getDashboardData() {
   const result =  api({
      method: "GET",
      headers: {},
      url: 'dashboard?fiscalYear=&quarter=&department=&directorate=&division=&rmType='
    });

   return responseTransformer(result);
}

export function getSelectOptions() {
   const result =  api({
      method: "GET",
      headers: {},
      url: 'dashboard/select_options'
    });

   return responseTransformer(result);
}

export function getRiskCount() {
   const result =  api({
      method: "GET",
      headers: {},
      url: 'dashboard/risk_count'
    });

   return responseTransformer(result);
}