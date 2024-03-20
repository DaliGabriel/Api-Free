import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
  styled,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import React from "react";
import { Link } from "react-router-dom";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface TheMealDbContentProps {
  mealName?: string;
  mealCountry?: string;
  mealInstructions?: string;
  mealSource?: string;
  mealYoutube?: string;
}

const TheMealDbContent: React.FC<TheMealDbContentProps> = ({
  mealName,
  mealCountry,
  mealInstructions,
  mealSource,
  mealYoutube,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Typography textAlign={"center"} gutterBottom variant="h5">
        {mealName || "Sin nombre"}
      </Typography>
      <Typography textAlign={"center"} gutterBottom variant="subtitle1">
        {mealCountry || "Sin origen"}
      </Typography>

      <CardActions disableSpacing>
        {mealYoutube && (
          <IconButton aria-label="You tube link">
            <Link target="_blank" className="no-link" to={mealYoutube}>
              <YouTubeIcon />
            </Link>{" "}
          </IconButton>
        )}

        {mealSource && (
          <IconButton aria-label="Meal source">
            <Link target="_blank" className="no-link" to={mealSource}>
              <LanguageIcon />
            </Link>{" "}
          </IconButton>
        )}

        {mealInstructions && (
          <ExpandMore
            onClick={handleExpandClick}
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography textAlign={"center"} gutterBottom variant="subtitle1">
            Instructions:
          </Typography>
          <Typography textAlign={"center"} gutterBottom variant="subtitle1">
            {mealInstructions || "Sin nombre"}
          </Typography>
        </CardContent>
      </Collapse>
    </>
  );
};

export default TheMealDbContent;
