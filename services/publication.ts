import * as log from "https://deno.land/std/log/mod.ts";
import { integrationKey, mediumUrl } from "../util/environment.ts";
import { get } from "../util/storage.ts";

const PublicationService = {
  getPublications: async () => {
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
      return data;
    } catch (error) {
      log.error(error);
      return null;
    }
  },
};

export default PublicationService;
