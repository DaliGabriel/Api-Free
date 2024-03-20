import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const DogsLink = () => {
  return (
    <>
      <Link className="no-link" to={`/Dogs`}>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>🐕</ListItemIcon>
          <ListItemText primary="Dogs" />
        </ListItemButton>
      </Link>
    </>
  );
};

export default DogsLink;
