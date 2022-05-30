import create from 'zustand'
import { persist } from 'zustand/middleware'

interface Visit {
	notVisited: boolean;
	setNotVisited: (notVisited: boolean) => void;
}
export const LocalStore = create(persist<Visit>((set) => ({
			notVisited: true,
			setNotVisited: (notVisited: boolean) =>set({ notVisited: notVisited }),
		}),
		{
			name: 'visit'
		}
	)
)
