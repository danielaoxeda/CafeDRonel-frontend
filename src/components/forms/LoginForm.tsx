import Input from '../input/Input.tsx'
import { Link } from 'react-router'
import Button from '../button/Button.tsx'
import { useState } from 'react'
import type { LoginRequest } from '../../interface/LoginRequest.ts'
import { login } from '../../services/authServices.ts'
import { toast } from 'sonner'

export default function LoginForm() {
    const [formData, setFormData] = useState<LoginRequest>({
        correo: '',
        contrasena: ''
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await login(formData).catch(error => {
            toast.error(error.response?.data?.message || 'Error en login')
        })
        toast.success('Login exitoso')
        console.log('JWT: ', (res as any)?.token)
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
