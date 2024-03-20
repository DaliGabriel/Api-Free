import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const TheMealDbLink = () => {
  return (
    <>
      <Link className="no-link" to={`/TheMealDb`}>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>🍽️</ListItemIcon>
          <ListItemText primary="TheMealDb" />
        </ListItemButton>
      </Link>
    </>
  );
};

export default TheMealDbLink;
