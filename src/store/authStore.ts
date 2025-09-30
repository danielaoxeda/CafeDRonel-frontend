import { create } from 'zustand/react'
import { persist } from 'zustand/middleware'
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

export const useAuthStore = create(
    persist<userStore>(
        set => ({
            user: { email: undefined, token: undefined, rol: undefined },
            setUser: user => set(prevState => ({ user: { ...prevState.user, ...user } })),
            logout: () => set({ user: { email: undefined, token: undefined, rol: undefined } })
        }),
        {
            name: 'auth-storage'
        }
    )
)
