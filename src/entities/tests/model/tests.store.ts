import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import testsService from "../api";
import type { ITestStore } from "./tests.types";

export const useTestsStore = create<ITestStore>()(
  devtools(
    immer((set, get) => ({
      tests: [],
      isLoading: true,
      getIntegratedItemsCounts: async () => {
        const { data } = await testsService.getTests();

        set((state) => {
          state.tests = [{ name: "Test", id: 1 }];
          state.isLoading = false;
        });
      },

      setLoading: async (flag: boolean) => {
        set((state) => {
          state.isLoading = flag;
        });
      },
    }))
  )
);
