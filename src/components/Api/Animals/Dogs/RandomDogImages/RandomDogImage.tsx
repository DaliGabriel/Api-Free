import { useFetchDogImage } from "../../../../../hooks/Dogs/useFetchDogImage";
import InfoCard from "../../../../Cards/InfoCard";
import RandomDogImageContent from "../RandomDogImageContent";

const RandomDogImage = () => {
    
  const { isLoading, data, error } = useFetchDogImage();


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

export default RandomDogImage;
