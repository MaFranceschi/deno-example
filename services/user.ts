const UserService = {
  getProfile: async () => {
    try {
      const response = await fetch(
        "https://api.medium.com/v1/me",
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default UserService;
