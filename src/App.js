import React from "react";
import MyAppBar from "./components/MyAppBar";
import BasicPagination from "./components/BasicPagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./pages/HomePage";
import Page3 from "./pages/Page3";
import Page2 from "./pages/Page2";
import { Routes, Route } from "react-router-dom";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Routes>
      <BasicPagination />
    </ThemeProvider>
  );
}

export default App;
