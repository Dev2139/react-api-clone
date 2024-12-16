import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-xl cursor-pointer">
         The API's HUB
        </Typography>
        <div className="flex space-x-4">
          <Button color="inherit">
            <Link to="/" className="text-white no-underline font-bold hover:text-yellow-400">About Us</Link>
          </Button>
          <Button color="inherit">
            <Link to="/api1" className="text-white no-underline font-bold hover:text-yellow-400">Meals</Link>
          </Button>
          <Button color="inherit">
            <Link to="/api2" className="text-white no-underline font-bold hover:text-yellow-400">Cocktails</Link>
          </Button>
          <Button color="inherit">
            <Link to="/api3" className="text-white no-underline font-bold hover:text-yellow-400">PotterApi</Link>
          </Button> 
          <Button color="inherit">
            <Link to="/api4" className="text-white no-underline font-bold hover:text-yellow-400">Bank Api</Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
