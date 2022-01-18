import { Request, Response, NextFunction } from "express";
import postService from "../services/post.service";

class PostController {

  async findByIds(req: Request, res: Response, next: NextFunction) {
    const { user_id, post_ids } = req.body;
    try {
      let post = await postService.getByIds(user_id, post_ids);
      return res.status(200).send({ data: post });
    } catch (e) {
      next(e);
    }
  }

  async mergePosts(req: Request, res: Response, next: NextFunction) {
    try {
      let post = await postService.mergePosts(req.body.post_ids);
      return res.status(200).send({ data: post });
    } catch (e) {
      next(e);
    }
  }
}

export default new PostController();
