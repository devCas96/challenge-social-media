export const createUserStore = (set) => ({
  authUser: null,
  logIn: (_user) => set(() => ({ authUser: _user })),
  logOut: () => set(() => ({ authUser: null })),
});
