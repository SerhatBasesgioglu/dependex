import express from "express";
import { getConcepts, addConcept } from "../services/conceptService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const concepts = await getConcepts();
  res.json(concepts);
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  const newConcept = await addConcept(name);
  res.json(newConcept);
});

export default router;
