import { create } from "zustand";
import { createAuthSlice } from "./slices/auths-slice";
import { createCHatSlice } from "./slices/chat-slice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createCHatSlice(...a),
}));
