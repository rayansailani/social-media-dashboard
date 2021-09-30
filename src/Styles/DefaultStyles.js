import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const defaultStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    bodyContainer: {
      backgroundColor: (darkMode) => {
        return darkMode ? "hsl(232, 19%, 15%)" : "hsl(0, 0%, 100%)";
      },
    },
    overlay: {
      position: "absolute !important",
      top: "0",
      backgroundColor: (darkMode) => {
        return darkMode ? "hsl(230, 17%, 14%)" : "hsl(225, 100%, 98%)";
      },
      width: "100%",
      height: "11.375rem",
      zIndex: "100",
      borderRadius: "0 0 1rem 1rem",
    },
    mainContent: {
      position: "absolute !important",
      top: "0",
      color: (darkMode) => {
        return darkMode ? "white" : "hsl(230, 17%, 14%)";
      },
      zIndex: "101",
      width: "100%",
    },
    cardContainer: {
      marginTop: "1rem !important",
    },
    boxContainer: {
      backgroundColor: (darkMode) => {
        return darkMode ? "hsl(228, 28%, 20%)" : "hsl(227, 47%, 96%)";
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 1.4rem",
      borderRadius: "0 0 0.4rem 0.4rem",
      "&:hover": {
        backgroundColor: (darkMode) => {
          return darkMode ? "hsl(232, 19%, 15%)" : "hsl(225, 100%, 98%)";
        },
      },
    },
  };
});
export default defaultStyles;
