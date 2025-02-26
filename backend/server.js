const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.PERSPECTIVE_API_KEY;
const PERSPECTIVE_API_URL =
  "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze";

// Endpoint to analyze text
app.post("/analyze", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    const response = await axios.post(
      PERSPECTIVE_API_URL,
      {
        comment: { text: text },
        languages: ["en"],
        requestedAttributes: { TOXICITY: {} },
      },
      { params: { key: API_KEY } }
    );

    const toxicityScore =
      response.data.attributeScores.TOXICITY.summaryScore.value;
    res.json({ toxicity: toxicityScore });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error analyzing text" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
