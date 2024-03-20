import { useFetchTagCat } from "../../../../../hooks/Cats/useFetchTagCat";
import InfoCard from "../../../../Cards/InfoCard";
import CardContent from "./CardInfoContent";

const CatTag = () => {
  const { isLoading, data, error } = useFetchTagCat();

  return (
    <div>
      <InfoCard
        isLoading={isLoading}
        imageUrl={data ? URL.createObjectURL(data) : ""}
        content={<CardContent />}
        error={error ? true : false}
      />
    </div>
  );
};
export default CatTag;
