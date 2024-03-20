import { Divider, Toolbar } from "@mui/material";

import { Link } from "react-router-dom";
import AnimalsList from "./Animals/AnimalsList";
import FoodAndDrink from "./FoodAndDrink/FoodAndDrink";

export function ListBar() {
  return (
    <>
      <Link className="no-link" to={`/`}>
        <Toolbar>Api List</Toolbar>
      </Link>

      <Divider />

      <AnimalsList />

      <FoodAndDrink />
    </>
  );
}
