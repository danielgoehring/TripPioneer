const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5002;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://danielgoehring73:p1a2s3s4w5o6r7d8@cluster0.687ibiq.mongodb.net/trippioneerdatabase?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// MongoDB schema and model
const imageSchema = new mongoose.Schema({
  url: String,
  description: String,
  dates: String,
  distance: String,
  price: String,
  alt: String,
});

const Image = mongoose.model("Image", imageSchema);

// Endpoint to get all image URLs
app.get("/images", async (req, res) => {
  try {
    const images = await Image.find({});
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
