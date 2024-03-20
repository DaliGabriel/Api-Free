import { useFetchDogImage5 } from "../../../../../hooks/Dogs/useFetchDogImage";
import InfoCard from "../../../../Cards/InfoCard";
import RandomDogImageContent from "../RandomDogImageContent";

const RandomDogImage5 = () => {
  
  const { isLoading, data, error } = useFetchDogImage5();


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

export default RandomDogImage5;
