import axios from 'axios';
import React from 'react';

export const axiosSecure = axios.create({
  baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;