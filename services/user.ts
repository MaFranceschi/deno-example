import * as log from "https://deno.land/std/log/mod.ts";
import { integrationKey, mediumUrl } from "../util/environment.ts";
import { save } from "../util/storage.ts";

const UserService = {
  getProfile: async () => {
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
      save(data);
      return data;
    } catch (error) {
      log.error(error);
      return null;
    }
  },
};

export default UserService;
