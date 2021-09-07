import React from 'react'
import Eat from "./Eat.jsx";
import NavBar from "./NavBar.jsx";
import { CssBaseline } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { RecipesProvider } from "./RecipesContext.jsx";
import RecipeSlider from "./RecipeSlider.jsx";
import InstructionsList from './InstructionsList.jsx';
import Speech from "./Speech.jsx";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f6685e",
      main: "#f44336",
      dark: "#aa2e25",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffcf33",
      main: "#ffc400",
      dark: "#b28900",
      contrastText: "#000",
    },
  },
});

const App = () => {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RecipesProvider>
          <NavBar />
          <CssBaseline />
          <Paper />
          <RecipeSlider />
          <Eat />
          <Speech />
          <InstructionsList />
        </RecipesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
