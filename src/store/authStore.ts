import { create } from 'zustand/react'
import { persist } from 'zustand/middleware'

type AuthData = {
    id: number | undefined
    email: string | undefined
    token: string | undefined
    rol: string | undefined
}


type userStore = {
    user: AuthData
    setUser: (user: AuthData) => void
    logout: () => void
}

export const useAuthStore = create(
    persist<userStore>(
        set => ({
            user: { id: undefined, email: undefined, token: undefined, rol: undefined },
            setUser: user => set(prevState => ({ user: { ...prevState.user, ...user } })),
            logout: () => set({ user: { id: undefined, email: undefined, token: undefined, rol: undefined } })
        }),
        {
            name: 'auth-storage'
        }
    )
)
