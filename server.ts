import { Application } from "https://deno.land/x/oak/mod.ts";

import {
  CommonRoutes,
  PostRoutes,
  PublicationRoutes,
  UserRoutes,
} from "./routes/index.ts";

const app = new Application();
const port = 8000;

app.use((context, next) => {
  console.log(context.request.method, context.request.url);
  next();
});

app.use(CommonRoutes.routes());
app.use(PostRoutes.routes());
app.use(PublicationRoutes.routes());
app.use(UserRoutes.routes());

await app.listen({ port });
