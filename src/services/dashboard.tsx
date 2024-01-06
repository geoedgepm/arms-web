import { DashboardFilter } from '@/types/dashboard';
import { api, responseTransformer } from './api';

export function getDashboardData(option?: DashboardFilter) {
   let queryParams = [];

   if (option?.fiscalYear) queryParams.push(`fiscalYear=${option.fiscalYear}`); 
   if (option?.quarter) queryParams.push(`quarter=${option.quarter}`); 
   if (option?.department) queryParams.push(`department=${option.department}`); 
   if (option?.category) queryParams.push(`category=${option.category}`); 
   if (option?.directorate) queryParams.push(`directorate=${option.directorate}`); 
   if (option?.division) queryParams.push(`division=${option.division}`);
   if (option?.status) queryParams.push(`status=${option.status}`);

   queryParams.push(`rmType=${option?.rmType ? option.rmType : ''}`);
   
   const result =  api({
      method: "GET",
      headers: {},
      url: `dashboard?${queryParams.map((param: string, index: number) => index === 0 ? param : `&${param}`).join('')}`
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