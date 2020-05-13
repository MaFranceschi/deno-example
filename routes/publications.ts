import { Router } from "https://deno.land/x/oak/mod.ts";
import PublicationService from "../services/publication.ts";
import { Publication } from "../types/types.ts";

const router = new Router();

router.get("/publications", async ({ response }) => {
  const publications: Publication[] | undefined = await PublicationService
    .getPublications();

  if (publications) {
    response.body = { message: "success", data: publications };
  } else {
    response.body = { message: "an error ocurred" };
  }
});

export default router;
