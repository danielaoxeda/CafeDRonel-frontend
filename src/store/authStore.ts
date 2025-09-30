import { create } from 'zustand/react'
type AuthData = {
    email: undefined | string
    token: undefined | string
    rol: undefined | string
}

type userStore = {
    user: AuthData
    setUser: (user: AuthData) => void
    logout: () => void
}

export const useAuthStore = create<userStore>(set => ({
    user: { email: undefined, token: undefined, rol: undefined },
    setUser: user => set(prevState => ({ user: { ...prevState.user, ...user } })),
    logout: () => set({ user: { email: undefined, token: undefined, rol: undefined } })
}))
