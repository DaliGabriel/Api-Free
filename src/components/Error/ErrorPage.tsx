import { Box,  Typography } from "@mui/material";

export default function ErrorPage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        bgcolor:'#121212'
      }}
    >
      <Box display={"block"} textAlign={"center"}>
        <img height={'200px'} src="https://m3.material.io/static/angular/404-light.caafc6e0327e9785.png" alt="" />
        <Typography variant="h4" gutterBottom style={{color: 'white'}}>
          This page cannot be found
        </Typography>
      </Box>
    </Box>
  );
}
