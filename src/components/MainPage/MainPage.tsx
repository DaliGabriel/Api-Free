import { Box, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <Box style={{ textAlign: "center" }}>
      <Typography variant="h2" component="h1">
        Free api Collection
      </Typography>
      <Paper style={{marginTop: '20px'}}>
        <Typography variant="h4" paddingTop={1}>
          A practical api collection use case
        </Typography>
        <Typography padding={3}>
          Inspirated of{" "}
          <Link target="_blank" className="link" to={"https://github.com/public-apis/public-apis"}>
            public-apis
          </Link>{" "}
          repo
        </Typography>
      </Paper>
    </Box>
  );
}
