import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { signleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(signleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated, signleUpload, updateProfile);

export default router;
