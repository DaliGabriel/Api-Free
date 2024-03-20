import { Box, Grid } from "@mui/material";
import CatTag from "./CatTag/CatTag";
import RandomCatGif from "./RandomCatGift/RandomCatGif";
import RandomCatImage from "./RandomCatImage/RandomCatImage";

export function CatFacts() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <RandomCatImage />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RandomCatGif />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CatTag />
        </Grid>
      </Grid>
    </Box>
  );
}
