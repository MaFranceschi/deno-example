import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();
const port = 8000;

router
  .get("/profile", (context) => {
    context.response.body = JSON.stringify({});
  })
  .get("/publications", (context) => {
    context.response.body = JSON.stringify({});
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });
