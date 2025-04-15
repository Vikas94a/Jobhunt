import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // "required" not "require"
      unique: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String, // url for company logo
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // "required" not "require"
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
