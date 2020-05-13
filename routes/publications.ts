import { Router } from "https://deno.land/x/oak/mod.ts";
import PublicationService from "../services/publication.ts";
import { get } from "../util/storage.ts";

const router = new Router();

router.get("/publications", async ({ response }) => {
  const profile = await PublicationService.getPublications();
  if (profile) {
    response.body = { message: "success", data: profile };
  } else {
    response.body = { message: "an error ocurred" };
  }
});

export default router;
