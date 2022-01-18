import { getRepository } from "typeorm";
import { Post } from "../models";

class PostService {

  async getByIds(userId: number, postIds: Array<number>) {
    const repository = getRepository(Post);
    let entity = await repository.find({ where: { user_id: userId, id: postIds }});

    return entity;
  }

  async mergePosts(listPosts: Array<Post[]>) {
    const repository = getRepository(Post);
    let mergeListPosts: Post[] = [];
    for (const each of listPosts) {
      mergeListPosts.push(...each);
    }

    const groupUniqueIds =  mergeListPosts.reduce((results, item) => {
      const current = results.find(i => i.id === item.id);
      if (current) {
        for (let property in item) {
          if (property !== 'id') {
            current[property] = item[property];
          }
        }
      } else {
        results.push({...item});
      }
      return results;
    }, []);

    return groupUniqueIds.sort((a, b) => b.createdAt - a.createdAt);
  }
}

export default new PostService();
