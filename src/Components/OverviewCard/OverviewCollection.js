import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OverviewCard from "./OverviewCard";
const useStyles = makeStyles((theme) => {
  return {
    marginOverview: {
      margin: "1rem 0 1rem 0 !important",
      fontWeight: "700 !important",
    },
  };
});

const Overview = ({ darkMode }) => {
  const styles = useStyles();
  const cardInfomation = [
    [
      "images/icon-facebook.svg",
      "Page Views",
      "87",
      "3%",
      "images/icon-up.svg",
    ],
    ["images/icon-facebook.svg", "Likes", "52", "2%", "images/icon-down.svg"],
    [
      "images/icon-instagram.svg",
      "Likes",
      "5462",
      "2257%",
      "images/icon-up.svg",
    ],
    [
      "images/icon-instagram.svg",
      "Profile Views",
      "52k",
      "2267%",
      "images/icon-up.svg",
    ],
    [
      "images/icon-twitter.svg",
      "Retweets",
      "117",
      "303%",
      "images/icon-up.svg",
    ],
    ["images/icon-twitter.svg", "Likes", "507", "303%", "images/icon-down.svg"],

    ["images/icon-youtube.svg", "Likes", "107", "19%", "images/icon-down.svg"],
    [
      "images/icon-youtube.svg",
      "Total Views",
      "1407",
      "12%",
      "images/icon-down.svg",
    ],
  ];
  return (
    <>
      <Typography variant="h5" className={styles.marginOverview}>
        Overview - Today
      </Typography>
      <Grid container spacing={2}>
        {cardInfomation.map((cardInfo) => {
          return (
            <Grid item md={3} xs={12}>
              <OverviewCard cardInfo={cardInfo} darkMode={darkMode} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Overview;
