import React, { useState } from "react";
import Camera from "./svg/Camera";
import { Box, IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

const MessageForm = ({ handleSubmit, text, setText, setImg }) => {
  const [preview, setpreview] = useState('')
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setpreview(reader.result)
        setImg(e.target.files[0])
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  return (
    <div style={{ diplay: 'flex', flexDirection: { lg: "row", xs: 'column' } }}>
      {preview === '' ? <Box sx={{ display: 'none' }} /> :
        <Box sx={{ position: 'absolute', width: { lg: '74vw', xs: '84vw' }, maxHeight: { lg: '20vh', xs: '15vh' }, bottom: 45, left: 0, background: 'linear-gradient(to right, #eb57a7,#f5b9b9, #41c2de)', overflow: 'hidden' }}>
          <IconButton onClick={(e) => { setpreview(''); setImg("") }} sx={{ position: 'absolute', color: 'red' }}>
            <CloseIcon />
          </IconButton>
          <Box component='img' src={preview} alt='Preview' sx={{ width: { lg: '10%', xs: '30%' } }} />
        </Box>
      }
      <form className="message_form" onSubmit={handleSubmit}>
        {preview === '' ? <label htmlFor="img">
          <Camera />
        </label> : <Box sx={{ display: 'none' }} />
        }

        <input
          onChange={imageHandler}
          type="file"
          id="img"
          accept="image/*"
          style={{ display: "none" }}
        />
        <div>
          <input
            type="text"
            placeholder="Enter message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" onClick={(e) => { setpreview('') }}>Send</button>
        </div>
      </form >
    </div >
  );
};

export default MessageForm;
