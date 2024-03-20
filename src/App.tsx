import { ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import { Outlet } from "react-router-dom";
import { ListBar } from "./components/SideBar/ListBar";
import { SideBar } from "./components/SideBar/SideBar";

const drawerWidth = 240;

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    //*reduce the fetch numbers
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
})

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />

          <SideBar
            titleBar="ApiFree"
            drawerWidth={drawerWidth}
            drawer={<ListBar />}
          />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 5,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {/* Espacio del navbar con el contenido */}
            <Toolbar />
            {/* Contenido de main page  */}
            <Outlet />
          </Box>

        </ThemeProvider>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
