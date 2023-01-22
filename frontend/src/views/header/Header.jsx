import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Grid container>
            <Grid item xs={5} sm={4}>
              <Typography variant="h6" color="inherit" component="div">
                Event-On-Click
              </Typography>
            </Grid>
            <Box sx={{ marginLeft: "auto" }}>
              <Button onClick={() => navigate("/")}>Home</Button>
              <Button onClick={() => navigate("/register")}>Register</Button>
              <Button onClick={() => navigate("/login")}>Login</Button>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
