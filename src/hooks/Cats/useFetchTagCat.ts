import { useQuery } from "react-query";
import { fetchTagCat } from "../../lib/CatFetchs";

export const useFetchTagCat = (tag:string = 'cute') => {
  return useQuery(
    `fetchTagCatImage-${tag}`, 
    () => fetchTagCat(tag),
    {
      onError: (error) => console.error("Error fetching cat tag:", error),
    }
  );
};