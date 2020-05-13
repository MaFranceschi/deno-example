import { Router } from "https://deno.land/x/oak/mod.ts";
import UserService from "../services/user.ts";
import { User } from "../types/user.ts";
import { get } from "../util/storage.ts";

const router = new Router();

router.get("/users", async ({ response }) => {
  const profile: User = await UserService.getProfile();
  console.log(get());
  if (profile) {
    response.body = { message: "success", data: profile };
  } else {
    response.body = { message: "an error ocurred" };
  }
});

export default router;
