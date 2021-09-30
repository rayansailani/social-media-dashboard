import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Card from "./Card";
import defaultStyles from "../../Styles/DefaultStyles";

const useStyles = makeStyles((theme) => {
  return {};
});
const BigCard = ({ darkMode }) => {
  const classes = defaultStyles();
  const styles = useStyles();
  const cardInformation = [
    [
      "images/icon-facebook.svg",
      "@nathanf",
      "1987",
      "Followers",
      "images/icon-up.svg",
      "12 Today",
      "hsl(208, 92%, 53%)",
    ],
    [
      "images/icon-twitter.svg",
      "@nathanf",
      "1044",
      "Followers",
      "images/icon-up.svg",
      "12 Today",
      "hsl(203, 89%, 53%)",
    ],
    [
      "images/icon-instagram.svg",
      "@nathanf",
      "11k",
      "Followers",
      "images/icon-up.svg",
      "12 Today",
      "linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%))",
    ],
    [
      "images/icon-youtube.svg",
      "@nathanf",
      "8239",
      "Followers",
      "images/icon-down.svg",
      "12 Today",
      "hsl(348, 97%, 39%)",
    ],
  ];
  return (
    <Grid container spacing={2} className={classes.cardContainer}>
      {cardInformation.map((cardInfo) => {
        return (
          <Grid item md={3} xs={12}>
            <Card cardInfo={cardInfo} darkMode={darkMode} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default BigCard;
