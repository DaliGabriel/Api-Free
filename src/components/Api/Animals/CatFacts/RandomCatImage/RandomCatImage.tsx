import { useFetchCatImage } from "../../../../../hooks/Cats/useFetchCatImage";
import InfoCard from "../../../../Cards/InfoCard";
import ContentRandomImage from "./ContentRandomImage";

const RandomCatImage = () => {

  const { isLoading, data, error } = useFetchCatImage();

  return (
    <>
      <InfoCard
        isLoading={isLoading}
        imageUrl={data ? URL.createObjectURL(data) : ""}
        content={<ContentRandomImage/>}
        error={error ? true : false}
      />
    </>
  );
};

export default RandomCatImage;
