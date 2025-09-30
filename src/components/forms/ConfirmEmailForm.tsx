import Input from '../input/Input.tsx'
import Button from '../button/Button.tsx'
import { type FormEvent, useState } from 'react'
import { Link } from 'react-router'
import { toast } from 'sonner'
import { forgot } from '../../services/passwordService.ts'
import axios from 'axios'

interface RecoveryFormData {
    email: string
}

interface RecoveryFormProps {
    setStep: (step: number) => void
    setEmail: (email: string) => void
}

export default function ConfirmEmailForm({ setStep, setEmail }: RecoveryFormProps) {
    const [formData, setFormData] = useState<RecoveryFormData>({
        email: ''
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            if (formData.email !== '') {
                const data = await forgot({ email: formData.email })

                if (data.message) {
                    toast.success('Email enviado con exito')
                    setEmail(formData.email)
                    setStep(2)
                }
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
                label="Correo"
                type="email"
                value={formData.email}
                onChange={e => {
                    setFormData(prevState => ({ ...prevState, email: e.target.value }))
                }}
                placeholder="Ingresa tu correo"
                required
            />

            <Button className="w-full">Validar Email</Button>

            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 justify-center items-center text-sm sm:text-base">
                <h3 className="text-primary">¿Cambiaste de opinión?</h3>
                <Link to="/auth/login" className="text-primary font-bold hover:underline">
                    Volver al inicio
                </Link>
            </div>
        </form>
    )
}
