import "./App.css";
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material'
import theme from '../src/utils/theme'
import {getTheme} from '../src/redux/actions/uiAction'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from './pages/Profile'
import AuthProvider from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  const THEME = createTheme(theme(ui.isDarkMode));
  useEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);
  return (
    <ThemeProvider theme={THEME}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
