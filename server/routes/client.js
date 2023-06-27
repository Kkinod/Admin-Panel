import express from "express";
import {
  getProducts,
  getUsers,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/transactions", getTransactions);
router.get("/users", getUsers);
router.get("/geography", getGeography);

export default router;
