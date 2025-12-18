import { UserType } from '@/types/include'
import { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

export function useUser() {
    const [user, setUser] = useState<UserType>()

    const getUser = async () => {
        const user = await SecureStore.getItemAsync('user')
        
        if (user) {
            setUser(JSON.parse(user))
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    return {
        user,
    }
}