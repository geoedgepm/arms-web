import { DashboardFilter } from '@/types/dashboard';
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

const bindDashboardQuery = (option?: DashboardFilter) => {
   let queryParams = [];

   if (option?.search) queryParams.push(`search=${option.search}`);
   if (option?.fiscalYear) queryParams.push(`fiscalYear=${option.fiscalYear}`); 
   if (option?.quarter) queryParams.push(`quarter=${option.quarter}`); 
   if (option?.department) queryParams.push(`department=${option.department}`); 
   if (option?.category) queryParams.push(`category=${option.category}`); 
   if (option?.directorate) queryParams.push(`directorate=${option.directorate}`); 
   if (option?.division) queryParams.push(`division=${option.division}`);
   if (option?.status) queryParams.push(`status=${option.status}`);
   if (option?.page) queryParams.push(`page=${option.page}`);

   queryParams.push(`rmType=${option?.rmType ? option.rmType : ''}`);

   return queryParams.map((param: string, index: number) => index === 0 ? param : `&${param}`).join('');
}

export {
   api,
   responseTransformer,
   bindDashboardQuery
} 