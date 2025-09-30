import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

type InputProps = {
    id?: string
    name?: string
    label?: string
    type?: React.HTMLInputTypeAttribute
    value?: string
    defaultValue?: string
    placeholder?: string
    disabled?: boolean
    readOnly?: boolean
    required?: boolean
    autoComplete?: string
    maxLength?: number
    minLength?: number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
    error?: string
    className?: string // clases extra para el input
    containerClassName?: string // clases extra para el contenedor
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export default function Input({
    id,
    name,
    label,
    type = 'text',
    value,
    defaultValue,
    placeholder,
    disabled,
    readOnly,
    required,
    autoComplete,
    maxLength,
    minLength,
    onChange,
    onBlur,
    onFocus,
    error,
    className = '',
    containerClassName = '',
    leftIcon,
    rightIcon
}: InputProps) {
    const inputId = id || name || `input-${Math.random().toString(36).slice(2, 8)}`
    const hasError = Boolean(error)
    const [showPassword, setShowPassword] = useState(false)

    const isPasswordType = type === 'password'
    const inputType = isPasswordType && showPassword ? 'text' : type

    return (
        <div className={`flex w-full flex-col gap-1 ${containerClassName}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className={`text-sm font-medium ${hasError ? 'text-red-600' : 'text-gray-800'}`}
                >
                    {label} {required && <span className="text-red-600">*</span>}
                </label>
            )}

            <div
                className={[
                    'flex items-center gap-2 rounded-md border bg-white px-3',
                    'focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500',
                    hasError ? 'border-red-500' : 'border-gray-300',
                    disabled ? 'opacity-60 cursor-not-allowed' : ''
                ].join(' ')}
            >
                {leftIcon && <span className="text-gray-500">{leftIcon}</span>}

                <input
                    id={inputId}
                    name={name}
                    type={inputType}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    autoComplete={autoComplete}
                    maxLength={maxLength}
                    minLength={minLength}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={[
                        'h-10 w-full bg-transparent outline-none placeholder:text-gray-400',
                        'text-gray-900',
                        className
                    ].join(' ')}
                    aria-invalid={hasError || undefined}
                    aria-describedby={hasError ? `${inputId}-error` : undefined}
                />

                {isPasswordType && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        disabled={disabled}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}

                {rightIcon && <span className="text-gray-500">{rightIcon}</span>}
            </div>

            {hasError && (
                <p id={`${inputId}-error`} className="text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    )
}
