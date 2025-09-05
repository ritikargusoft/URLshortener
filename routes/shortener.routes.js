import { Router } from "express";
import {
  postURLShortener,
  getShortenerPage,
  redirectToShortLink,
  postShortenerEditPage,
  getShortenerEditPage,
  deleteShortCode,
} from "../controllers/postshortenerController.js";

const router = Router();

router.get("/", getShortenerPage);

router.post("/", postURLShortener);

router.get("/:shortCode", redirectToShortLink);

router.route("/edit/:id").get(getShortenerEditPage).post(postShortenerEditPage);

router.route("/delete/:id").post(deleteShortCode);

//default export
// export default router;

// Named exports
export const shortenerRoutes = router;
