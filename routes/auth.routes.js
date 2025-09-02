import { Router } from "express";
import * as authControllers from "../controllers/authController.js";

const router = Router();

// router.get("/register", authControllers.getRegisterPage);

router
.route("/register")
.get(authControllers.getRegisterPage)
.post(authControllers.postRegister)

// router.get("/login", authControllers.getLoginPage);
// router.post("/login", authControllers.postLogin);


router
  .route("/login")
  .get(authControllers.getLoginPage)
  .post(authControllers.postLogin);


export const authRoutes = router;