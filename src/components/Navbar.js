import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box } from '@mui/material'

import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";

const Navbar = () => {

  const { user } = useContext(AuthContext);


  return (
    <nav>
      <Link to="/"><img src="messenger.png" alt="Girl in a jacket" width="50" height="50"></img></Link>
      <h3>
        Messenger
      </h3>
      <div>
        {user ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Link to="/profile">Profile</Link>
            <ModeSwitch />
           
          </Box>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
