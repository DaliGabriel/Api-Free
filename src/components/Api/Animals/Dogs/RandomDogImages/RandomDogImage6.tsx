import { useFetchDogImage6 } from "../../../../../hooks/Dogs/useFetchDogImage";
import InfoCard from "../../../../Cards/InfoCard";
import RandomDogImageContent from "../RandomDogImageContent";

const RandomDogImage6 = () => {
    
  const { isLoading, data, error } = useFetchDogImage6();


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

export default RandomDogImage6;
