import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Ensure this matches the User model name
      required: true,
    },
    navColor: { type: String, trim: true },
    navText: { type: String, trim: true },
    navImage: { type: String, trim: true },
    introText: { type: String, trim: true },
    introTitle: { type: String, trim: true },
    bio: { type: String, trim: true },
    aboutBgColor: { type: String, trim: true },
    profileImage: { type: String, trim: true },
    projectOneTitle: { type: String, trim: true },
    projectOneText: { type: String, trim: true },
    projectOneUrl: { type: String, trim: true },
    projectOneImage: { type: String, trim: true },
    projectTwoTitle: { type: String, trim: true },
    projectTwoText: { type: String, trim: true },
    projectTwoUrl: { type: String, trim: true },
    projectTwoImage: { type: String, trim: true },
    projectThreeTitle: { type: String, trim: true },
    projectThreeText: { type: String, trim: true },
    projectThreeUrl: { type: String, trim: true },
    projectThreeImage: { type: String, trim: true },
    resumeUrl: { type: String, trim: true },
    githubLink: { type: String, trim: true },
    linkedin: { type: String, trim: true }, // Fixed spelling
    footer: { type: String, trim: true },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
