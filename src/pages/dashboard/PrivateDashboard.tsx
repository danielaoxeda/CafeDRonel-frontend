import { type ReactNode, useEffect } from 'react'
import { useAuthStore } from '../../store/authStore.ts'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'
import { verify } from '../../services/authServices.ts'

interface PrivateDashboardProps {
    children: ReactNode
}

export default function PrivateDashboard({ children }: PrivateDashboardProps) {
    const { user } = useAuthStore()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)

        if (user.token === undefined || user.rol !== 'ADMINISTRADOR') {
            console.log('No tiene permisos')
            toast.error('Usted no tiene los permisos suficientes para ingresar a este sitio')
            navigate('/auth/login')
        } else {
            verify({ token: user.token! }).then(data => {
                if (!data.message) {
                    toast.error('Su inicio de session a expirado, por favor ingrese nuevamente.')
                    navigate('/auth/login')
                }
            })
        }
    }, [user])

    return <>{children}</>
}
