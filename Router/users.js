import { Router } from "express";
import gravatar from "gravatar";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { check, validationResult } from "express-validator";

import User from "../models/profile.js/Users.js";

dotenv.config(); // Load environment variables

const router = Router();

router.post(
  "/",
  [
    check("firstName", "First name is required").notEmpty(),
    check("lastName", "Last name is required").notEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Generate user's Gravatar
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      // Create new user instance
      user = new User({
        firstName,
        lastName,
        email,
        avatar,
        password,
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Create JWT payload
      const payload = { user: { id: user.id } };

      // Generate token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "5d",
      });

      res.json({ token });
    } catch (err) {
      console.error(`Error registering user: ${err.message}`);
      res.status(500).json({ error: "Server error" });
    }
  }
);

export default router;
