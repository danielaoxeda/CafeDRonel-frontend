import Input from '../input/Input.tsx'
import Button from '../button/Button.tsx'
import { useState } from 'react'
import type { RegisterRequest } from '../../interface/RegisterRequest.ts'
import { register } from '../../services/authServices.ts'
import { toast } from 'sonner'
import { Link } from 'react-router'

export default function RegisterForm() {
    const [formData, setFormData] = useState<RegisterRequest>({
        nombre: '',
        correo: '',
        contrasena: '',
        telefono: '',
        direccion: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await register(formData)
            alert('Usuario registrado')
            console.log('Respuesta:', res)
            // Aquí puedes redirigir al login si quieres
        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Error al registrar')
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

            <Button className="w-full">Iniciar sesión</Button>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center text-sm sm:text-base">
                <h3 className="text-primary">¿Ya tienes una cuenta?</h3>
                <Link to="/auth/login" className="text-primary font-bold hover:underline">
                    Inicia Sesion aqui
                </Link>
            </div>
        </form>
    )
}
