import { useQuery } from "react-query";
import { fetchDogImage } from "../../lib/DogFetchs";

export const useFetchDogImage = () => {
  return useQuery(`fetchDogImage`, () => fetchDogImage(), {
    onError: (error) => console.error("Error fetching dog image:", error),
  });
};
export const useFetchDogImage2 = () => {
  return useQuery(`fetchDogImage2`, () => fetchDogImage(), {
    onError: (error) => console.error("Error fetching dog image:", error),
  });
};
export const useFetchDogImage3 = () => {
  return useQuery(`fetchDogImage3`, () => fetchDogImage(), {
    onError: (error) => console.error("Error fetching dog image:", error),
  });
};
export const useFetchDogImage4 = () => {
  return useQuery(`fetchDogImage4`, () => fetchDogImage(), {
    onError: (error) => console.error("Error fetching dog image:", error),
  });
};
export const useFetchDogImage5 = () => {
  return useQuery(`fetchDogImage5`, () => fetchDogImage(), {
    onError: (error) => console.error("Error fetching dog image:", error),
  });
};
export const useFetchDogImage6 = () => {
  return useQuery(`fetchDogImage6`, () => fetchDogImage(), {
    onError: (error) => console.error("Error fetching dog image:", error),
  });
};
