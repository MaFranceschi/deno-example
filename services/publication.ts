import * as log from "https://deno.land/std/log/mod.ts";
import { integrationKey, mediumUrl } from "../util/environment.ts";
import { Publication } from "../types/types.ts";
import { get } from "../util/storage.ts";

const PublicationService = {
  getPublications: async (): Promise<Publication[] | undefined> => {
    try {
      const { id: userId } = get();
      const response = await fetch(
        `${mediumUrl}/users/${userId}/publications`,
        {
          headers: {
            Authorization: `Bearer ${integrationKey}`,
          },
        },
      );
      const { data } = await response.json();
      log.debug("publications retrieved");
      return data;
    } catch (error) {
      log.error(error);
    }
  },
};

export default PublicationService;
