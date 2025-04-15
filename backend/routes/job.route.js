import express from "express";
import isAuntenticated from "../middlewares/isAuntenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.js";

const router = express.Router();

router.route("/post").post(isAuntenticated, postJob);
router.route("/get").get(isAuntenticated, getAllJobs);
router.route("/getadminjobs").get(isAuntenticated, getAdminJobs);
router.route("/get/:id").get(isAuntenticated, getJobById);

export default router;
