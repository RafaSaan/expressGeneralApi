import { Router } from "express";

import {
  createUser, testUser
} from "../controllers/UserController";

const router = Router();

router.post("/", testUser);
router.post("/create", createUser);


export default router;