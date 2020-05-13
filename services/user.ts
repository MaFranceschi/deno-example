import { integrationKey } from "../util/environment.ts";

const UserService = {
  getProfile: async () => {
    try {
      const response = await fetch(
        "/me",
        {
          headers: {
            Authorization: `Bearer ${integrationKey}`,
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default UserService;
