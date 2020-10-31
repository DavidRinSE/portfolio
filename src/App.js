import React from "react";
import Home from "./pages/Home.jsx"
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "./theme"

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

/*

THEME COLORS

Dark orange: #E27D60
Light blue: #85DCB
Light orange: #E8A87C
purple or something: #C38D9E
Dark green: #41B3A3

Orange: #ee8572
Light blue: #d4f3ef
Light green: #abf0e9
Dark green: #63b7af

Dominate black: #1e1e1e
Red: #c64349
Blue: ##5b81aa
Yellow: #cfb243
Purple: #ac5ba9
Orange: #ba5e05
*/

export default App;
