import { create } from "zustand";

const useUserStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export default useUserStore;
