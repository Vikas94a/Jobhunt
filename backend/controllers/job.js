import { Job } from "../models/job.model.js";

// for admin
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      jobType,
      experiance,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !jobType ||
      !experiance ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "Some details are missing",
        success: false,
      });
    }
    let requirementArray;

    if (requirement) {
      requirementArray = requirement.split(",");
    }

    const job = await Job.create({
      title,
      description,
      requirement: requirementArray,
      salary: Number(salary),
      location,
      jobType,
      experianceLevel: experiance,
      position,
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({
      message: "New job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// for students

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } }, // ✅ Fixed typo
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query);

    if (jobs.length === 0) {
      // ✅ Corrected check
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// for students

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not founnd",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// Number of job created by admin till date
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs) {
      return res.status(404).json({
        message: "Job not founnd",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
