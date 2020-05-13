import { Router } from "https://deno.land/x/oak/mod.ts";
import UserService from "../services/user.ts";

const router = new Router();

router.get("/users", async ({ response }) => {
  const profile = await UserService.getProfile();
  if (profile) {
    response.body = { message: "success", data: profile };
  } else {
    response.body = { message: "An error ocurred" };
  }
});

export default router;
