import { useRouter } from 'expo-router'
import { useEffect, useRef } from 'react'
import { AppState } from 'react-native'
import * as SecureStore from 'expo-secure-store'

export default function UserInactivityProvider({ children }: { 
    children: React.ReactNode
}) {
    const appState = useRef(AppState.currentState)
    const router = useRouter()

    const recordTime = async () => {
        await SecureStore.setItemAsync('startTime', Date.now().toString())
    }

    const handleAppStateChange = async (nextAppState: any) => {
        if (nextAppState === 'inactive') {
            router.push('(modals)/overlay')
        } else {
            if (router.canGoBack()) {
                router.back()
            }
        }

        if (nextAppState === 'background') {
            recordTime()
        } else if (nextAppState === 'active' && appState.current.match(/background/)) {
            const elapsed = Date.now() - (parseInt(await SecureStore.getItemAsync('startTime')))

            if (elapsed >= 3000) {
                router.push('(auth)/lock')
            }
        }

        appState.current = nextAppState
    }

    useEffect(() => {
        const subscription = AppState.addEventListener('change', handleAppStateChange)

        return () => {
            subscription.remove()
        }
    }, [])

    return children
}