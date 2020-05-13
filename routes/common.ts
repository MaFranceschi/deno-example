import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", async ({ response }) => {
  response.body = { message: "Welcome to Deno example application." };
});

export default router;
