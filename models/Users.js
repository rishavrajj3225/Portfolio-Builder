import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { 
        type: String,
        required: true,
        trim: true,
    },
    lastName: { 
        type: String,
        required: true,
        trim: true 
    },
    email: { type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: { type: String,
        required: true,
        minlength: 6
    },
    avatar: { type: String,
        default: ""
    },
    published_portfolio: { type: String,
        default: ""
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
