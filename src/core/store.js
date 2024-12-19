import { create } from "zustand";

export const useUserStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export const useAppStore = create((set) => ({
  hasVisited: false,
  setVisited: () => set({ hasVisited: true }),
}));
