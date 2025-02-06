import React, { useState } from "react";
import axios from "axios";

function App() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [text, setText] = useState("Press the button to start voice chat");

  const startVoiceRecognition = async () => {
    setText("Listening...");
    try {
      const response = await axios.get(`${backendURL}/start`);
      console.log(response.data);
      // const response = await axios.get("http://192.168.0.144:5000/start");
      setText(`Recognized: ${response.data.text}`);
    } catch (error) {
      setText("Couldn't recognize voice");
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Vosk Voice Chat App</h1>
      <p>{text}</p>
      <button onClick={startVoiceRecognition} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Start Voice Chat
      </button>
    </div>
  );
}

export default App;
