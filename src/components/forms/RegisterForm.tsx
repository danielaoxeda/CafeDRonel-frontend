import Input from '../input/Input.tsx'
import Button from '../button/GeneralButton.tsx'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import type { RegisterRequest } from '../../interface/RegisterRequest.ts'
import { register } from '../../services/authServices.ts'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

export default function RegisterForm() {
    const [formData, setFormData] = useState<RegisterRequest>({
        nombre: '',
        correo: '',
        contrasena: '',
        telefono: '',
        direccion: '',
        rol: 'CLIENTE'
    })
    const navigate = useNavigate()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            if (!/^\d+$/.test(formData.telefono)) {
                toast.error('El teléfono debe contener solo números')
                return
            }
            const res = await register(formData)

            if (res) {
                toast.success('Registro exitoso')
                navigate('/auth/login')
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message
                toast.error(errorMessage || 'Error de conexión con el servidor')
            } else {
                toast.error('Error inesperado durante el registro')
                console.error('Error no controlado:', error)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <Input
                label="Nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
                required
            />

            <Input
                label="Correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Ingresa tu correo"
                required
            />

            <Input
                label="Contraseña"
                name="contrasena"
                type="password"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                required
            />

            <Input
                label="Teléfono"
                name="telefono"
                type="text"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ingresa tu teléfono"
            />

            <Input
                label="Dirección"
                name="direccion"
                type="text"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ingresa tu dirección"
            />

            <Button className="w-full">Registrarme</Button>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center text-sm sm:text-base">
                <h3 className="text-primary">¿Ya tienes una cuenta?</h3>
                <Link to="/auth/login" className="text-primary font-bold hover:underline">
                    Inicia Sesion aqui
                </Link>
            </div>
        </form>
    )
}
