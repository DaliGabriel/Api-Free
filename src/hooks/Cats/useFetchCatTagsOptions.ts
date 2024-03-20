import { useQuery } from "react-query";
import { fetchCatTagsOptions } from "../../lib/CatFetchs";

export const useFetchCatTagsOptions = () => {
  return useQuery(
    `useFetchCatTagsOptions`, 
    () => fetchCatTagsOptions(),
    {
      onError: (error) => console.error("Error fetching cat gif:", error),
    }
  );
};