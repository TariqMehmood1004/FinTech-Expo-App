import axios from 'axios';

const BASE_URL = 'https://api.getharvest.app';
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbW8gVXNlciIsImVtYWlsIjoiZGVtb0BoYXJ2ZXN0YXBwLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJFBOUUhvQ1d5M0xjRUV0VGltNWp5Q09NSDFrbVpxMC53MlE1akRKLmcvUXc1TUdMRWFvdllHIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDgtMTZUMTc6NDc6MDkuNDc2WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDgtMTZUMTc6NDc6MDkuNDc2WiIsImlhdCI6MTcyMzkwMDU0NCwiZXhwIjoxNzIzOTg2OTQ0fQ.YJMBOy_deKXw1WJSqNGrVmEG5Bd4nnrUc5u5BoqOnR4";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
    },
});


api.interceptors.request.use(async config => {
  const token = API_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
