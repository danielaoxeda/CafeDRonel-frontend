import Input from '../input/Input.tsx'
import { Link, useNavigate } from 'react-router'
import Button from '../button/Button.tsx'
import { type FormEvent, useState } from 'react'
import type { LoginRequest } from '../../interface/LoginRequest.ts'
import { login } from '../../services/authServices.ts'
import { toast } from 'sonner'
import axios from 'axios'
import { useAuthStore } from '../../store/authStore.ts'

export default function LoginForm() {
    const [formData, setFormData] = useState<LoginRequest>({
        correo: '',
        contrasena: ''
    })
    const navigate = useNavigate()
    const { setUser } = useAuthStore()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await login(formData)

            if (res) {
                console.log(res)

                toast.success('Inicio de sesion exitoso')
                setUser(res)

                if (res.rol === 'ADMINISTRADOR') {
                    navigate('/dashboard')
                } else if (res.rol === 'CLIENTE') {
                    navigate('/')
                }
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message
                toast.error(errorMessage || 'Error de conexión con el servidor')
            } else {
                toast.error('Error inesperado durante el Inicio de sesion')
                console.error('Error no controlado:', error)
            }
        }
    }

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
                label="Correo"
                type="email"
                value={formData.correo}
                onChange={e => {
                    setFormData(prevState => ({
                        ...prevState,
                        correo: e.target.value
                    }))
                }}
                placeholder="Ingresa tu correo"
                required
            />

            <Input
                label="Contraseña"
                type="password"
                value={formData.contrasena}
                onChange={e => {
                    setFormData(prevState => ({
                        ...prevState,
                        contrasena: e.target.value
                    }))
                }}
                placeholder="Ingrese su contraseña"
                required
            />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
                <label className="flex gap-2 text-sm sm:text-base">
                    <input type="checkbox" />
                    Recordarme
                </label>

                <Link
                    to="/auth/forgot-password"
                    className="text-primary hover:underline font-bold text-sm sm:text-base"
                >
                    Recuperar contraseña
                </Link>
            </div>

            <Button className="w-full">Iniciar sesión</Button>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center text-sm sm:text-base">
                <h3 className="text-primary">¿No tienes cuenta?</h3>
                <Link to="/auth/register" className="text-primary font-bold hover:underline">
                    Registrate aquí
                </Link>
            </div>
        </form>
    )
}
