import express from "express";
import controller from "../controllers/post.controller";
import commonValidator from "../middlewares/common/validation.middleware";
import {
  MergePostDto,
  FindPostIdsDto,
} from "../dto/postDto";

const router = express.Router();

router.post(
  "/",
  commonValidator.dtoValidationMiddleware(MergePostDto),
  controller.mergePosts
);

router.get("/:id",   commonValidator.dtoValidationMiddleware(FindPostIdsDto), controller.findByIds);

export default router;
