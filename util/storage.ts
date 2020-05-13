import { User } from "../types/types.ts";

interface Store {
  user: User;
}

const store = {
  user: {
    id: "",
    username: "",
    name: "",
    url: "",
    imageUrl: "",
  },
};

const get = () => {
  return store?.user;
};

const save = (user: User) => {
  store.user = { ...user };
};

export {
  get,
  save,
};
