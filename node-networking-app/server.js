import fs from "node:fs/promises";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

let i = 0;

app.use("/", async (req, res) => {
  try {
    await fs.appendFile("./data.txt", `\n😎 Logging into to data.txt:${i++}`);
    res.json({ message: "running" });
  } catch (error) {
    await fs.appendFile(
      "./data.txt",
      `\n😶 Error occured while appending into to data.txt:${i++}`
    );
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
