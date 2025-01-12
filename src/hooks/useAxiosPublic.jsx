import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-rho-gray.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
