import { Box, Grid } from "@mui/material";
import RandomDogImage from "./RandomDogImages/RandomDogImage";
import RandomDogImage2 from "./RandomDogImages/RandomDogImage2";
import RandomDogImage3 from "./RandomDogImages/RandomDogImage3";
import RandomDogImage4 from "./RandomDogImages/RandomDogImage4";
import RandomDogImage6 from "./RandomDogImages/RandomDogImage6";
import RandomDogImage5 from "./RandomDogImages/RandomDogImage5";

const Dogs = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <RandomDogImage />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RandomDogImage2 />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RandomDogImage3 />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RandomDogImage4 />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RandomDogImage5 />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RandomDogImage6 />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dogs;
