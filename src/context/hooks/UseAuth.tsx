import { useState, useEffect } from 'react'
import api from '../../api/api'

type FormInputs = {
    email: string
    password: string
}

interface dataLogin {
    data: FormInputs
}

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token:control-money')

        if (token) {
            api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    const handleLogin = async (data: dataLogin)  => {
        // eslint-disable-next-line no-console
        console.log('data before send', data['data'])
        const {
            data: { token },
        } = await api.post('/auth', data['data'])
        /* eslint-disable no-console */
        console.log(token)
        localStorage.setItem('token:control-money', JSON.stringify(token))
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setAuthenticated(true)
    }

    async function handleLogout() {
        setAuthenticated(false)
        localStorage.removeItem('token:control-money')
        api.defaults.headers.common['Authorization'] = ''
    }

    return { authenticated, loading, handleLogin, handleLogout }
}
