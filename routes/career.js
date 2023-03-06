import express from "express"
import { createCareer, updateCareer, deleteCareer, getCareer, getCareers} from "../controllers/career.js";

const router = express.Router();

//CREATE
router.post("/", createCareer)
//UPDATE
router.put("/:id", updateCareer)
//DELETE
router.delete("/:id", deleteCareer)
//GET
router.get("/find/:id", getCareer)
//GET ALL
router.get("/", getCareers)

export default router