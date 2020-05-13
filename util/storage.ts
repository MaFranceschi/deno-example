import { User } from "../types/user.ts";

interface Store {
  user: User;
}

const store = {
  user: {},
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
