import React, { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    register: UseFormRegister<any>
}

export const Input = ({ name, register, ...rest }: InputPros) => {
    return (
        <input
            {...register(name)}
            {...rest}
        />
    )
}
