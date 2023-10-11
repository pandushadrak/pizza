import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Route, Routes, Link } from "react-router-dom";
import Sign from "./Sign.js";
import Contact from "../web-app/Contact.js";
import Product from "../web-app/Product.js";
import "./reapp.css";

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 0.5 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link class="a" to="/prdt">
              Product
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            Branches
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.5 }}>
            <Link class="a" to="/contact">
              Contact us
            </Link>
          </Typography>

          <Button style={{ color: "white" }}>
            <Link class="a" to="/lgn">
              Login
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/lgn" element={<Sign />} />
        <Route path="/prdt" element={<Product />} />
      </Routes>
    </Box>
  );
}
