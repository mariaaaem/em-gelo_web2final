import React, { useState } from "react";
import Camera from "./svg/Camera";

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
    <div style={{ diplay: 'flex', flexDirection: "row", alignSelf: "flex-start", backgroundColor: 'blue' }}>
      {preview === '' ? <div></div> :
        <div style={{ position: 'absolute', height: '20%', width: '20%', bottom: -85, left: 200 }}>
          <img src={preview} alt='Preview' width={'30%'} />
        </div>
      }
      <form className="message_form" onSubmit={handleSubmit}>
        <label htmlFor="img">
          <Camera />
        </label>
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
          <button className="btn">Send</button>
        </div>
      </form >
    </div>
  );
};

export default MessageForm;
