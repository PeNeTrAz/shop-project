import { create } from "zustand";

type States = {
    name: string
    email: string
    id: string
}

type Actions = {
    setName: (name: States["name"]) => void
    setEmail: (name: States["email"]) => void
    setId: (name: States["id"]) => void
}

const initialState: States = {
    name: '',
    email: '',
    id: ''
}

export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialState,
    setName: (name) => set(state => ({ ...state, name })),
    setEmail: (email) => set(state => ({ ...state, email })),
    setId: (id) => set(state => ({ ...state, id }))
}))