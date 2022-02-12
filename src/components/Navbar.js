import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box } from '@mui/material'
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";

const Navbar = () => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const handleSignout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false,
    });
    await signOut(auth);
    history.replace("/login");
  };
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
            <button className="btn" onClick={handleSignout}>
              Logout
            </button>
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
