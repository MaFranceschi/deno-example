import * as log from "https://deno.land/std/log/mod.ts";
import { integrationKey, mediumUrl } from "../util/environment.ts";
import { User } from "../types/types.ts";
import { save } from "../util/storage.ts";

const UserService = {
  getProfile: async (): Promise<User | undefined> => {
    try {
      const response = await fetch(
        `${mediumUrl}/me`,
        {
          headers: {
            Authorization: `Bearer ${integrationKey}`,
          },
        },
      );
      const { data } = await response.json();
      log.debug("user profile retrieved");
      save(data);
      return data;
    } catch (error) {
      log.error(error);
    }
  },
};

export default UserService;
