import React from "react";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import NormalLayout from "layout/NormalLayout";
import Register from "pages/Register";
import Login from "pages/Login";
import Student from "pages/Student";
import StudentLayout from "layout/StudentLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<NormalLayout />}>
              <Route path="auth/register" element={<Register />} />
              <Route path="auth/login" element={<Login />} />
              <Route path="" element={<StudentLayout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
