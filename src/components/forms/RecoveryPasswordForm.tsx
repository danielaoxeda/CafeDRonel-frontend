import Input from '../input/Input.tsx'
import Button from '../button/GeneralButton.tsx'
import { Link, useNavigate } from 'react-router'
import { type FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { resetPassword } from '../../services/passwordService.ts'
import axios from 'axios'

interface RecoveryFormData {
    recoveryCode: string
    newPassword: string
    confirmPassword: string
}

interface RecoveryFormProps {
    email: string
}

export default function RecoveryPasswordForm({ email }: RecoveryFormProps) {
    const [formData, setFormData] = useState<RecoveryFormData>({
        recoveryCode: '',
        newPassword: '',
        confirmPassword: ''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (formData.newPassword !== formData.confirmPassword) {
            toast.warning('Las contraseñas deben coincidir')
            return
        }

        try {
            const res = await resetPassword({
                email: email,
                recoveryCode: formData.recoveryCode,
                newPassword: formData.newPassword
            })

            if (res.message) {
                toast.success('Su contraseña ha sido cambiada con exito')
                navigate('/auth/login')
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message
                toast.error(errorMessage || 'Error de conexión con el servidor')
            } else {
                toast.error('Error inesperado durante la peticion')
                console.error('Error no controlado:', error)
            }
        }
    }

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
                label="Codigo de recuperación"
                type="text"
                value={formData.recoveryCode}
                onChange={e => {
                    setFormData(prevState => ({ ...prevState, recoveryCode: e.target.value }))
                }}
                placeholder="Ingresa el codigo que llego a tu email"
                required
            />

            <Input
                label="Nueva Contraseña"
                type="password"
                value={formData.newPassword}
                onChange={e => {
                    setFormData(prevState => ({ ...prevState, newPassword: e.target.value }))
                }}
                placeholder="Ingresa tu nueva contraseña"
                required
            />

            <Input
                label="Repetir la contraseña"
                type="password"
                value={formData.confirmPassword}
                onChange={e => {
                    setFormData(prevState => ({ ...prevState, confirmPassword: e.target.value }))
                }}
                placeholder="Repite la contraseña"
                required
            />

            <Button className="w-full">Iniciar sesión</Button>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center text-sm sm:text-base">
                <h3 className="text-primary">¿Cambiaste de opinión?</h3>
                <Link to="/auth/login" className="text-primary font-bold hover:underline">
                    Volver al inicio
                </Link>
            </div>
        </form>
    )
}
