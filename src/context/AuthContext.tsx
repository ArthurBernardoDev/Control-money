import React, { createContext, ReactNode } from 'react'
import useAuth from './hooks/UseAuth'

type FormInputs = {
    email: string
    password: string
}

interface dataLogin {
    data: FormInputs
}

interface ContextData {
    loading: boolean
    authenticated: boolean
    handleLogin: (data: dataLogin) => Promise<void>
    handleLogout: () => void
}
const Context = createContext({} as ContextData)

interface AuthProviderProps {
    children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
    const { authenticated, loading, handleLogin, handleLogout } = useAuth()

    return (
        <Context.Provider
            value={{ loading, authenticated, handleLogin, handleLogout }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }
