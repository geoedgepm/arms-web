import { DashboardFilter } from '@/types/dashboard';
import { api, responseTransformer, bindDashboardQuery } from './api';

export function getDashboardData(option?: DashboardFilter) {
   const result =  api({
      method: "GET",
      headers: {},
      url: `dashboard?${bindDashboardQuery(option)}`
    });
   console.log('result', result);
   
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

export function getRiskSummary(option?: DashboardFilter) {
   const result =  api({
      method: "GET",
      headers: {},
      url: `dashboard/risk_summaries?${bindDashboardQuery(option)}`
    });

   return responseTransformer(result);
}

export function getRiskDetail(option?: DashboardFilter) {
   const result =  api({
      method: "GET",
      headers: {},
      url: `dashboard/risk_treatment_details?${bindDashboardQuery(option)}`
    });

   return responseTransformer(result);
}