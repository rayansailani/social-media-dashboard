import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import defaultStyles from "../../Styles/DefaultStyles";

const useStyles = makeStyles((theme) => {
  return {
    boxContainer: {
      backgroundColor: (darkMode) => {
        return darkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 1.4rem",
      borderRadius: "0.4rem",
    },

    insideComtainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});
const OverviewCard = ({ cardInfo, darkMode }) => {
  const styles = useStyles(darkMode);
  const classes = defaultStyles(darkMode);
  return (
    <Box className={`${styles.boxContainer}`}>
      <Box
        className={styles.insideComtainer}
        style={{ width: "100%", marginBottom: "1.4rem" }}
      >
        <Typography
          variant="body2"
          style={{
            fontWeight: "700",
            color: darkMode ? "hsl(228, 12%, 44%)" : "hsl(228, 34%, 66%)",
          }}
        >
          {cardInfo[1]}
        </Typography>
        <img src={`${window.location.href}/${cardInfo[0]}`} alt="" />
      </Box>
      <Box className={styles.insideComtainer} style={{ width: "100%" }}>
        <Typography
          variant="h4"
          style={{
            color: darkMode ? "hsl(228, 12%, 44%)" : "black",
            fontWeight: "700",
          }}
        >
          {cardInfo[2]}
        </Typography>
        <Box className={styles.insideComtainer}>
          <img src={`${window.location.href}/${cardInfo[4]}`} alt="" />
          <Typography
            variant="body2"
            style={{
              color:
                cardInfo[4] === "images/icon-down.svg"
                  ? "hsl(356, 69%, 56%)"
                  : "hsl(163, 72%, 41%)",
            }}
          >
            {cardInfo[3]}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default OverviewCard;
