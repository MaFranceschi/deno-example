import * as log from "https://deno.land/std/log/mod.ts";
import { integrationKey, mediumUrl } from "../util/environment.ts";
import { CreatedPost, Post } from "../types/types.ts";
import { get } from "../util/storage.ts";

const PublicationService = {
  createPost: async (newPost: Post): Promise<CreatedPost | undefined> => {
    try {
      const { id: userId } = get();
      const response = await fetch(
        `${mediumUrl}/users/${userId}/posts`,
        {
          body: JSON.stringify(newPost),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${integrationKey}`,
          },
          method: "POST",
        },
      );
      const { data } = await response.json();
      log.debug("post created");
      return data;
    } catch (error) {
      log.error(error);
    }
  },
};

export default PublicationService;
