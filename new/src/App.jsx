import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("Press the button to start voice chat");

  const startVoiceRecognition = async () => {
    setText("Listening...");
    try {
      const response = await axios.get("http://127.0.0.1:5000/start");
      setText(`Recognized: ${response.data.text}`);
    } catch (error) {
      setText("Error recognizing speech");
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
