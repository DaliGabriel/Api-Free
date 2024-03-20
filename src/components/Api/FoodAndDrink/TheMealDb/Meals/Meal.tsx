import { IconButton, IconButtonProps, styled } from "@mui/material";
import { useFetchTheMealDb } from "../../../../../hooks/TheMealDb/useFetchTheMealDb";
import InfoCard from "../../../../Cards/InfoCard";
import TheMealDbContent from "../TheMealDbContent";
import React from "react";



const Meal = () => {
  const { isLoading, data, error } = useFetchTheMealDb();

  if (data) {
    console.log(data.meals[0]);
  }


  return (
    <>
      <InfoCard
        cardActionArea={false}
        isLoading={isLoading}
        imageUrl={data?.meals[0].strMealThumb || ""}
        content={
          <TheMealDbContent
            mealName={data?.meals[0].strMeal}
            mealInstructions={data?.meals[0].strInstructions}
            mealYoutube={data?.meals[0].strYoutube}
            mealCountry={data?.meals[0].strArea}
            mealSource={data?.meals[0].strSource}
          />
        }
        error={error ? true : false}
      />
    </>
  );
};

export default Meal;
