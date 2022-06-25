import create from 'zustand'

export const bearStore = create<{
    bears: number,
    kind: string,
    increasePopulation: () => void,
    changeKind: (kind: string) => void
}>((set) => ({
    bears: 0,
    kind: "polar",
    increasePopulation: () => set((state) => ({bears: state.bears + 1})),
    changeKind: (kind) => set((state) => ({kind})),
    removeAllBears: () => set({bears: 0}),
}))