import { useFetchDogImage4 } from "../../../../../hooks/Dogs/useFetchDogImage";
import InfoCard from "../../../../Cards/InfoCard";
import RandomDogImageContent from "../RandomDogImageContent";

const RandomDogImage4 = () => {
    
  const { isLoading, data, error } = useFetchDogImage4();


  return (
    <>
      <InfoCard
        isLoading={isLoading}
        imageUrl={data?.message ?? ""}
        content={<RandomDogImageContent/>}
        error={error ? true : false}
      />
    </>
  );
};

export default RandomDogImage4;
