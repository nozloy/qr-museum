import create from 'zustand'
import { persist } from 'zustand/middleware'
import Data from './Base.json'

interface building {
    captionName: string;
    routerLink: string;
    description: string;
    isVisited: boolean;
    type: string;

}

interface buildingStore {
    buildings: building[];
    setVisited: (routerLink: string) => void;
    resetVisited: () => void;


}


export const useBuildingStore = create(persist<buildingStore>((set, get) => ({
    buildings: Data,
    setVisited: (routerLink: string) => {
        const { buildings } = get();
        set({
            buildings: buildings.map((building) => ({...building, isVisited: building.routerLink === routerLink ? true : building.isVisited})) })
    },
    resetVisited: () => {
        const { buildings } = get();
        set({
            buildings: buildings.map((building) => ({...building, isVisited: false}))   
        })
        }
}),
    {
        name: 'BuildingsStore',
        version: 3
}))