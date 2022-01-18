import express from "express";
import PostRouter from "./post.router";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  return res.status(200).send({ data: "pong" });
});

router.use("/post", PostRouter);

export default router;
