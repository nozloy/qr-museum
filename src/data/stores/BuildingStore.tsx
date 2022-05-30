import create from 'zustand'
import { persist } from 'zustand/middleware'
import TestData from './TestBase.json'

interface building {
    captionName: string;
    routerLink: string;
    description: string;
    audioName: string;
    isVisited: boolean;
}

interface buildingStore {
    buildings: building[];
    newBuilding: (
        captionName: string,
        routerLink: string,
        description: string,
        audioName: string) => void;

}


export const useBuildingStore = create(persist<buildingStore>((set, get) => ({
    buildings: [TestData],
    newBuilding: (
        captionName: string,
        routerLink: string,
        description: string,
        audioName: string) => {
        const { buildings } = get();
        const newBuilding = {
            captionName,
            routerLink,
            description,
            audioName,
            isVisited: false
        }
        set({
           buildings: [newBuilding].concat(buildings) 
        })
        }
}),
    {
    name: 'BuildingsStore'
}))