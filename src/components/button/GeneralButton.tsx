import {type ButtonHTMLAttributes, useEffect, useState} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "warning" | "danger";
}

export default function Button({onClick, className, children, type, variant = "primary"}: ButtonProps) {
    const [colorVariant, setColorVariant] = useState<string>("")

    useEffect(() => {
        switch (variant) {
            case "primary":
                setColorVariant("bg-primary text-white");
                break;
            case "secondary":
                setColorVariant("bg-secondary text-white");
                break;
            case "warning":
                setColorVariant("bg-yellow-500 text-white");
                break;
            case "danger":
                setColorVariant("bg-red-500 text-white");
                break;
        }
    }, [variant]);

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${colorVariant} px-2 py-2 cursor-pointer rounded-lg font-bold flex gap-4 items-center justify-center ${className} hover:opacity-70 transition-all`}>
            {children}
        </button>
    );
}