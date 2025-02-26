import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [toxicity, setToxicity] = useState(null);

  const analyzeText = async () => {
    if (!text) return alert("Please enter text!");

    try {
      const response = await axios.post("http://localhost:5000/analyze", {
        text,
      });
      setToxicity(response.data.toxicity);
    } catch (error) {
      console.error("Error analyzing text", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Perspective AI - Toxicity Analyzer</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={analyzeText} className="analyze-button">
        Analyze
      </button>
      {toxicity !== null && (
        <p style={{ marginTop: "20px" }}>
          Toxicity Score: <strong>{(toxicity * 100).toFixed(2)}%</strong>
        </p>
      )}
    </div>
  );
}

export default App;
