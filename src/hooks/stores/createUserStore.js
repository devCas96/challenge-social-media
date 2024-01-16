export const createUserStore = (set) => ({
  authUser: null,
  setLogIn: (_user) => set(() => ({ authUser: _user })),
  setLogOut: () => set(() => ({ authUser: null })),
});
