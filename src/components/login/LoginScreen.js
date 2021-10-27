import React,{useContext} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginImage from "../../assets/loginImage.jpg";
import { useState } from "react";
import { Alert } from "@mui/material";

import {types} from '../../types/types';
import {AuthContext} from '../../auth/AuthContext'

const user = {
  email: "user@user.com",
  password: "password",
};

export const LoginScreen = ({ history }) => {
  const [error, setError] = useState({
    message: "",
    status: false,
  });

  const lastPath = localStorage.getItem("lastPath")||"/";

  const { email, password } = user;

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email === e.target.email.value &&
      password === e.target.password.value
    ) {
      

      dispatch({
        type: types.login,
        payload: {
          email: e.target.email.value,
          password: e.target.password.value,
        },
      });
      history.replace(lastPath);
      
    }
    return setError({
      message: "Invalid email or password",
      status: true,
    });
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${loginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={(e) => handleLogin(e)}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {error.status && (
                <Alert severity="error"> {error.message}</Alert>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
