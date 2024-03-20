import { useQuery } from "react-query";
import { fetchTheMealDb } from "../../lib/TheMealDbFetch";

export const useFetchTheMealDb = () => {
    return useQuery(`fetchBaconImage`, () => fetchTheMealDb(), {
      onError: (error) => console.error("Error fetching TheMealDb:", error),
    });
  };