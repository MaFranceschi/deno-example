import { Router } from "https://deno.land/x/oak/mod.ts";
import PostService from "../services/post.ts";
import { CreatedPost } from "../types/types.ts";

const router = new Router();

router.post("/posts", async ({ request, response }) => {
  const { value } = await request.body();
  const post: CreatedPost | undefined = await PostService.createPost(value);

  if (post) {
    response.body = { message: "success", data: post };
  } else {
    response.body = { message: "an error ocurred" };
  }
});

export default router;
