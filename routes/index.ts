import { Router } from "https://deno.land/x/oak/mod.ts";

import PostRoutes from "./posts.ts";
import PublicationRoutes from "./publications.ts";
import UserRoutes from "./users.ts";

const CommonRoutes = new Router();

CommonRoutes.get("/", (context) => {
  context.response.body = JSON.stringify({
    message: "Welcome to Deno example application",
  });
});

export { CommonRoutes, PostRoutes, PublicationRoutes, UserRoutes };
