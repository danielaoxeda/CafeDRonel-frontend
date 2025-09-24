import Input from "../input/Input.tsx";
import {Link} from "react-router";
import Button from "../button/Button.tsx";

export default function LoginForm() {
    return (
        <form className="w-full flex flex-col gap-4">
            <Input label="Correo" type="email" placeholder="Ingresa tu correo" required />

            <Input label="Contraseña" type="password" placeholder="Ingrese su contraseña" required />

            <div className="flex justify-between items-center">
                <label className="flex gap-2">
                    <input type="checkbox"/>
                    Recordarme
                </label>

                <Link to="/auth/forgot-password" className="text-primary hover:underline font-bold">Recuperar contraseña</Link>
            </div>

            <Button>Iniciar session</Button>

            <div className="flex gap-2 justify-center">
                <h3 className="text-primary">¿No tienes cuenta?</h3>
                <Link to="/auth/register" className="text-primary font-bold hover:underline">Registrate aquí</Link>
            </div>
        </form>
    );
}