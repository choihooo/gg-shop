import { create } from "zustand";

export const useUserStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export const useAppStore = create((set) => ({
  hasVisited: false,
  setVisited: () => set({ hasVisited: true }),
}));

export const useTabStore = create((set) => ({
  disabled: true,
  setDisabled: (value) => set({ disabled: value }),
}));

export const useBusinessTypeStore = create((set) => ({
  selectedType: "unselected",
  setSelectedType: (type) => set({ selectedType: type }),
}));
