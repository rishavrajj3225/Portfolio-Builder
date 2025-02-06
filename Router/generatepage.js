import { Router } from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import auth from "../middleware/auth.js";
import User from "../models/profile.js/Users.js";

const router = Router();

// Resolve the directory of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

router.post("/", async (req, res) => {
  try {
    const { page } = req.body;

    if (!page) {
      return res
        .status(400)
        .json({ status: false, error: "Page content is required" });
    }

    // Construct file path dynamically
    const filePath = path.resolve(
      __dirname,
      "../../views/src/pages/CustomPage.js"
    );

    // Write to file asynchronously
    await fs.writeFile(filePath, page, "utf8");

    res.json({ status: true, error: null });
  } catch (err) {
    console.error("Failed to write file. Error:", err);
    res.status(500).json({ status: false, error: err.message });
  }
});

export default router;
