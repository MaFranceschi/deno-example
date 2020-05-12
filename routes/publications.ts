import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/publications", (context) => {
  context.response.body = JSON.stringify({});
});

export default router;
