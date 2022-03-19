import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../Assets/images/posinewslogo.png";
import styled from "styled-components";

const LogoImage = styled.img`
  width: 90px;
`;

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <LogoImage src={logo}></LogoImage>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
