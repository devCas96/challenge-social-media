import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createPostStore } from './createPostStore';
import { createUIStore } from './createUIStore';
import { createUserStore } from './createUserStore';

export const useBoundStore = create(
  devtools((...a) => ({
    ...createPostStore(...a),
    ...createUIStore(...a),
    ...createUserStore(...a),
  }))
);
