import { useQuery } from "react-query";
import { fetchCatImage } from "../../lib/CatFetchs";

export const useFetchCatImage = () => {
  return useQuery(
    `fetchCatImage`, 
    () => fetchCatImage(),
    {
      onError: (error) => console.error("Error fetching cat image:", error),
    }
  );
};