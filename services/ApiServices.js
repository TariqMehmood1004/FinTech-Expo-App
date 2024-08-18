// ApiServices.js

import axios from 'axios';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

// Base URL for your API
const BASE_URL = 'https://api.salla.dev/admin/v2';
const SALLA_API_TOKEN = "ory_at_j7MnHcuZR7XP9sxz51Kb9RoeSsekf4bFXBnT6itUjV4.KTy2pSrIc1E367ne_m51dxT3PGK1Ijqkx3XPmz40snc";


// Create an axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SALLA_API_TOKEN}`,
    },
});

// Retry request logic
const retryRequest = async (request, retries = 3, delay = 1000) => {
    try {
        return await request();
    } catch (error) {
        if (error.response && error.response.status === 429 && retries > 0) {
            // Retry after delay
            await new Promise((resolve) => setTimeout(resolve, delay));
            return retryRequest(request, retries - 1, delay * 2);
        }
        throw error;
    }
};

// Add a request interceptor to include tokens or other headers
api.interceptors.request.use(
    async (config) => {
        // If you need to add dynamic tokens or other headers
        // You can modify the headers here
        // Example: config.headers.Authorization = `Bearer ${dynamicToken}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor for global error handling
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            handleUnauthorized();
        }
        return Promise.reject(error);
    }
);

// Function to handle GET requests
export const get = async (url, params = {}, setLoading) => {
    try {
        setLoading(true);
        const response = await retryRequest(() => api.get(url, { params }));
        return response;
    } catch (error) {
        throw error;
    } finally {
        setLoading(false);
    }
};

// Function to handle POST requests
export const post = async (url, data, setLoading) => {
    try {
        setLoading(true);
        const response = await retryRequest(() => api.post(url, data));
        return response;
    } catch (error) {
        throw error;
    } finally {
        setLoading(false);
    }
};

// Function to handle PUT requests
export const put = async (url, data, setLoading) => {
    try {
        setLoading(true);
        const response = await retryRequest(() => api.put(url, data));
        return response;
    } catch (error) {
        throw error;
    } finally {
        setLoading(false);
    }
};

// Function to handle DELETE requests
export const del = async (url, setLoading) => {
    try {
        setLoading(true);
        const response = await retryRequest(() => api.delete(url));
        return response;
    } catch (error) {
        throw error;
    } finally {
        setLoading(false);
    }
};

// Function to handle unauthorized access
const handleUnauthorized = () => {
    console.log('Unauthorized - handling logout or redirect');
};
