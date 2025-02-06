import { Router } from "express";
import dotenv from "dotenv";
import auth from "../middleware/auth.js";
import Profile from "../models/profile.js";
import User from "../models/profile.js/Users.js";

dotenv.config(); // Load environment variables

const router = Router();

router.get("/me", auth, async (req, res) => {
  try {
    // console.log(`User ID: ${req.user.id}`);

    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["firstName", "lastName", "avatar", "email"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(`Error fetching profile: ${err.message}`);
    res.status(500).send("Server Error");
  }
});

router.post("/", auth, async (req, res) => {
  try {
    // console.log(`User ID: ${req.user.id}`);
    // console.log("Profile Data:", req.body);

    // Destructure request body
    const profileFields = { user: req.user.id, ...req.body };

    // Find and update profile, create if not exists
    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );

    // console.log("Profile Updated:", profile);
    res.json(profile);
  } catch (err) {
    console.error(`Error updating profile: ${err.message}`);
    res.status(500).send("Server error");
  }
});

export default router;
