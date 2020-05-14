import { Application } from "https://deno.land/x/oak/mod.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { port } from "./util/environment.ts";

import {
  CommonRoutes,
  PostRoutes,
  PublicationRoutes,
  UserRoutes,
} from "./routes/index.ts";

const app = new Application();

app.use(async (context, next) => {
  await next();
  log.info(`${context.request.method} ${context.request.url.pathname}`);
});

app.use(UserRoutes.routes());
app.use(PostRoutes.routes());
app.use(PublicationRoutes.routes());
app.use(CommonRoutes.routes());

console.log(`App running on Port http://localhost:${port}`);
await app.listen({ port });
