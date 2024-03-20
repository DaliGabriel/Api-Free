import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import useOpenState from "../../../lib/useOpenState";
import BaconmockupLink from "./TheMealDb/TheMealDbLink";


const FoodAndDrink = () => {

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
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Food and Drink" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <BaconmockupLink/>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default FoodAndDrink;
