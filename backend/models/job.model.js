import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    requirements: [
      {
        type: String,
      },
    ],
    salary: {
      type: Number,
      required: [true, "Salary is required"],
    },
    experienceLevel: {
      type: Number,
      required: [true, "ExperienceLevel is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    jobType: {
      type: String,
      required: [true, "JobType is required"],
    },
    position: {
      type: Number,
      required: [true, "Position is required"],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
