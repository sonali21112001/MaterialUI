import React, { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import Main from "./components/Main";
import Contact from "./components/Contact";
import SMS from "./components/SMS";
import AddContact from "./components/Contact/AddContact";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { addTheme, fetchThemeJSON } from "./redux/themeReducer/theme.Reducer";
// import { diff } from "just-diff";
// import { grey } from "@mui/material/colors";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "", element: <Main /> },
    { path: "Contact", element: <Contact /> },
    { path: "add-contact", element: <AddContact /> },
    { path: "sms", element: <SMS /> },
  ]);
  return routes;
};

export const App = () => {
  const dispatch = useDispatch();

  const selectedThemeValue = useSelector(
    (state) => state.theme.selectedThemeValue
  );
  const pallets = useSelector((state) => state.theme.pallets);

  const [themes, setThemes] = useState({
    light: createTheme({
      palette: {
        mode: "light",
        background: {
          paper: "#fff",
        },
        text: {
          primary: "#222",
        },
      },
    }),
  });
  useEffect(() => {
    dispatch(fetchThemeJSON());
  }, []);

  useEffect(() => {
    if (pallets === null) return;
    const allThemes = Object.keys(pallets).reduce((acc, curr) => {
      acc[curr] = createTheme({
        palette: pallets[curr],
      });
      return acc;
    }, {});
    setThemes(allThemes);
  }, [pallets]);

  return (
    <ThemeProvider theme={themes[selectedThemeValue]}>
      <Router>
        <AppBar />
        <AppRoutes />
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
};
