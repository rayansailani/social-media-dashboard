import React, { useState } from "react";
import Heading from "./Components/Heading/Heading";
import BigCard from "./Components/BigCard/BigCard";
import Overview from "./Components/OverviewCard/OverviewCollection";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Container, Button } from "@mui/material";
import defaultStyles from "./Styles/DefaultStyles";
const theme = createTheme({
  typography: {
    fontFamily: "'Inter'",
  },
});
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const classes = defaultStyles(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <div className={`${classes.bodyContainer} container-height`}>
        <div className={classes.overlay}></div>
        <Container
          className={classes.mainContent}
          maxWidth="xl"
          style={{ margin: "0", padding: "0" }}
        >
          <Container maxWidth="lg">
            <Heading setDarkMode={toggleMode} darkMode={darkMode} />
            <BigCard darkMode={darkMode} />
            <Overview darkMode={darkMode} />
          </Container>
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default App;
