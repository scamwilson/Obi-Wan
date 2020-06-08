import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SpaceJesus from "./components/pictures/spacejesus";
import Logo from "./logo.svg";
import { lightBlue } from "@material-ui/core/colors";
import { ReactComponent as SpaceJesus3 } from "./Kenobi.svg";

const tinycolor = require("tinycolor2");

function App() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        textAlign: "center",
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );

  const useStylesCard = makeStyles({
    root: {
      minWidth: 275,
      textAlign: "center",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const [colour, setColour] = useState(tinycolor.random().toHex());

  const useStylesButton = makeStyles({
    button: {
      backgroundColor: "#" + colour,
    },
  });

  const classes = useStyles();

  const classesCard = useStylesCard();

  const classesButton = useStylesButton();

  const compColours = tinycolor(colour).analogous();

  const colourMatrix = compColours.map(function (t: any) {
    return t.toHexString();
  });

  const changeColour = (e: any) => {
    setColour(e.target.value.slice(1));
  };

  const fillProps = {
    fill: colour,
  };

  return (
    <React.Fragment>
      <Card className={classesCard.root}>
        <CardContent>
          <Typography
            className={classesCard.title}
            color="textSecondary"
            gutterBottom
          >
            Hello there! General Kenobi, a bold one you are.
          </Typography>
          <Typography variant="h5" component="h2">
            Obi Wan Generator
          </Typography>
          <Typography variant="body2" component="p">
            I've become more powerful than any Jedi.
          </Typography>
        </CardContent>
      </Card>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Enter HEX Code"
          variant="outlined"
          defaultValue={"#" + colour}
          onChange={changeColour}
        />
      </form>
      <SpaceJesus fill={colourMatrix[0]} />
      <SpaceJesus fill={colourMatrix[1]} />
      <SpaceJesus fill={colourMatrix[2]} />
      <SpaceJesus fill={colourMatrix[3]} />
      <SpaceJesus fill={colourMatrix[4]} />
      <SpaceJesus fill={colourMatrix[5]} />
    </React.Fragment>
  );
}

export default App;
