import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import useOpenState from "../../../lib/useOpenState";
import CatsLink from "./CatsLink/CatsLink";
import DogsLink from "./DogsLink/DogsLink";

const AnimalsList = () => {
  const { open, handleClick } = useOpenState();

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="Animals" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CatsLink />
            <DogsLink />
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default AnimalsList;
