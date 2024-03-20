import { useFetchDogImage3 } from "../../../../../hooks/Dogs/useFetchDogImage";
import InfoCard from "../../../../Cards/InfoCard";
import RandomDogImageContent from "../RandomDogImageContent";

const RandomDogImage3 = () => {
    
  const { isLoading, data, error } = useFetchDogImage3();


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

export default RandomDogImage3;
