import { Box, Grid } from "@mui/material";
import Meal from "./Meals/Meal";

const TheMealDb = () => {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Meal/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TheMealDb;
