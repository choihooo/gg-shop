import { create } from "zustand";
import payments from "../data/payments";

export const useUserStore = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export const useAppStore = create((set) => ({
  hasVisited: false,
  setVisited: () => set({ hasVisited: true }),
}));

export const useTabStore = create((set) => ({
  disabled: false,
  setDisabled: (value) => set({ disabled: value }),
}));

export const useBusinessTypeStore = create((set) => ({
  selectedType: "unselected",
  setSelectedType: (type) => set({ selectedType: type }),
}));

export const usePaymentStore = create((set) => ({
  isSelectionMode: false,
  selectedItems: [],
  isAllSelected: false, // 전체 선택 상태 추가

  setSelectionMode: (isActive) => set({ isSelectionMode: isActive }),

  toggleItemSelection: (id) =>
    set((state) => {
      const isSelected = state.selectedItems.includes(id);
      const updatedSelectedItems = isSelected
        ? state.selectedItems.filter((item) => item !== id)
        : [...state.selectedItems, id];

      // 전체 선택 여부 업데이트
      const isAllSelected = updatedSelectedItems.length === payments.length;

      return {
        selectedItems: updatedSelectedItems,
        isSelectionMode: updatedSelectedItems.length > 0,
        isAllSelected,
      };
    }),

  resetSelection: () =>
    set({
      selectedItems: [],
      isSelectionMode: false,
      isAllSelected: false,
    }),

  // 전체 아이템 선택 메서드
  selectAllItems: () =>
    set(() => {
      const allItemIds = payments.map((payment) => payment.id);
      return {
        selectedItems: allItemIds,
        isSelectionMode: true,
        isAllSelected: true,
      };
    }),

  // 전체 선택 해제 메서드
  deselectAllItems: () =>
    set({
      selectedItems: [],
      isSelectionMode: false,
      isAllSelected: false,
    }),
}));
