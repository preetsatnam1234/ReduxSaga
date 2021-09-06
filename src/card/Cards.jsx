import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AlertDialog from "./AlertDialog";
import SimpleModal from "./SimpleModal";
import "./card.css";

const Cards = ({ id, name, img, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className="card-wrapper">
      <CardHeader title={name} style={{ height: "25px", fontSize: "15px" }} />
      <CardMedia className="media" image={img} title={name} />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className="description"
          style={{ fontSize: "18px" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        className="button_icon"
        style={{ padding: "0px" }}
      >
        <IconButton>
          <AlertDialog id={id} />
        </IconButton>

        <IconButton>
          <SimpleModal id={id} name={name} description={description} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;
