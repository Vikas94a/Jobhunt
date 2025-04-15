import express from "express";
import isAuntenticated from "../middlewares/isAuntenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updatStatus,
} from "../controllers/application.js";

const router = express.Router();

router.route("/apply/:id").post(isAuntenticated, applyJob);
router.route("/get").get(isAuntenticated, getAppliedJobs);
router.route("/:id/applicants").get(isAuntenticated, getApplicants);
router.route("/status/:id/update").post(isAuntenticated, updatStatus);

export default router;
