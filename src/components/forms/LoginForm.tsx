import Input from "../input/Input.tsx";
import {Link} from "react-router";
import Button from "../button/Button.tsx";
import { useState } from "react";
import type { LoginRequest } from "../../interface/LoginRequest.ts";
import { login } from "../../services/authServices.ts";
import { toast } from "sonner";

export default function LoginForm() {

    const [formData,setFormData] = useState<LoginRequest>({
        correo: '',
        contrasena : '', 

    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login(formData);
            toast.success("Login exitoso");
            console.log("JWT: ", res.token)
        } catch (error: any){
            toast.error(error.response?.data?.message || "Error en login");
        }
    }

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input label="Correo" type="email" value={formData.correo} onChange={(e) => {
                setFormData(prevState => (
                    {
                        ...prevState,
                        correo: e.target.value,
                    }
                ))
            }} placeholder="Ingresa tu correo" required />

            <Input label="Contraseña" type="password" value={formData.contrasena} onChange={(e) => {
                setFormData(prevState => (
                    {
                        ...prevState,
                        contrasena: e.target.value,
                    }
                ))
                
            }} placeholder="Ingrese su contraseña" required />

            <div className="flex justify-between items-center">
                <label className="flex gap-2">
                    <input type="checkbox"/>
                    Recordarme
                </label>

                <Link to="/auth/forgot-password" className="text-primary hover:underline font-bold">Recuperar contraseña</Link>
            </div>

            <Button>Iniciar sesión</Button>

            <div className="flex gap-2 justify-center">
                <h3 className="text-primary">¿No tienes cuenta?</h3>
                <Link to="/auth/register" className="text-primary font-bold hover:underline">Registrate aquí</Link>
            </div>
        </form>
    );
}