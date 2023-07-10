import express from "express";
import { getAdmins, getAllUsers } from "../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/allUsers", getAllUsers);

export default router;
