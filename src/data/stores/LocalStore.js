import create from 'zustand'
import { persist } from 'zustand/middleware'

export const LocalStore = create(
	persist(
		(set, get) => ({
			notvisited: true,
			afterVisit: () => set({ notvisited: false }),
		}),
		{
			name: 'visit',
			getStorage: () => sessionStorage,
		}
	)
)
