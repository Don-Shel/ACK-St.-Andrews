"use client"

import { create } from "zustand"

interface NotificationState {
  showBanner: boolean
  setShowBanner: (show: boolean) => void
  dismissed: string[]
  setDismissed: (dismissed: string[]) => void
}

export const useNotificationStore = create<NotificationState>((set) => ({
  showBanner: false,
  setShowBanner: (show: boolean) => set({ showBanner: show }),
  dismissed: [],
  setDismissed: (dismissed: string[]) => set({ dismissed }),
}))

