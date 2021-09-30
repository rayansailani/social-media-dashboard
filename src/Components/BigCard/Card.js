import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import defaultStyles from "../../Styles/DefaultStyles";

const useStyles = makeStyles((theme) => {
  return {
    iconContainer: {
      display: "flex",
      alignItems: "center",
    },
    followers: {
      letterSpacing: "4px !important",
      textTransform: "uppercase !important",
    },
    marginDown: {
      marginBottom: "0.6rem",
    },
  };
});

const Card = ({ cardInfo, darkMode }) => {
  const styles = useStyles(darkMode);
  const classes = defaultStyles(darkMode);
  return (
    <>
      <Box
        style={{
          background: `${cardInfo[6]}`,
          paddingTop: "4px",
          borderRadius: "0.5rem 0.5rem 0 0 ",
          height: "1px",
        }}
      ></Box>
      <Box className={classes.boxContainer}>
        <div className={`${styles.iconContainer} ${styles.marginDown}`}>
          <img
            src={`${window.location.href}/${cardInfo[0]}`}
            style={{ marginRight: "0.75rem" }}
          />
          <Typography variant="body2" gutterBottom>
            {cardInfo[1]}
          </Typography>
        </div>
        <Typography variant="h2">{cardInfo[2]}</Typography>
        <Typography
          gutterBottom
          variant="body1"
          className={styles.followers}
          style={{
            color: darkMode ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
          }}
        >
          {cardInfo[3]}
        </Typography>
        <div className={styles.iconContainer}>
          <img
            src={`${window.location.href}/${cardInfo[4]}`}
            alt=""
            style={{ height: "8px", marginRight: "0.2rem" }}
          />
          <Typography
            gutterBottom
            variant="body2"
            style={{
              color:
                cardInfo[4] === "images/icon-down.svg"
                  ? "hsl(356, 69%, 56%)"
                  : "hsl(163, 72%, 41%)",
            }}
          >
            {cardInfo[5]}
          </Typography>
        </div>
      </Box>
    </>
  );
};
export default Card;
