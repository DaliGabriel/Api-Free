import { usefetchCatGif } from "../../../../../hooks/Cats/useFetchCatGif";
import InfoCard from "../../../../Cards/InfoCard";
import ContentRandomGif from "./ContentRandomGif";

const RandomCatGif = () => {

  const { isLoading, data, error } = usefetchCatGif();

  return (
    <div>
      <InfoCard
        isLoading={isLoading}
        imageUrl={data ? URL.createObjectURL(data) : ""}
        content={<ContentRandomGif />}
        error={error ? true : false}
      />
    </div>
  );
};
export default RandomCatGif;
