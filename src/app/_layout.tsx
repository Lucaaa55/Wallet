import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

export default function Layout() {
    let [loaded] = useFonts({
        'InstaSans': require('../../public/fonts/Instacart/Sans.ttf'),
        'InstaCon': require('../../public/fonts/Instacart/Contrast.ttf'),
        'OpenBlack': require('../../public/fonts/Open/Black.ttf'),
        'OpenLight': require('../../public/fonts/Open/Light.ttf'),
        'Gascone': require('../../public/fonts/Gascone/Regular.ttf'),
        'Stratford': require('../../public/fonts/Stratford/Regular.otf'),
        'Arial': require('../../public/fonts/Arial/Light.ttf'),
        'Noyh': require('../../public/fonts/Noyh/Light.ttf'),
        'Styrene': require('../../public/fonts/Styrene/Regular.ttf'),
        'Tiempos': require('../../public/fonts/Tiempos/Regular.ttf'),
        'Tailwind': require('../../public/fonts/Tailwind/Black.ttf'),
        'Aalto': require('../../public/fonts/Aalto/Medium.ttf'),
        'NSemibold': require('../../public/fonts/Nova/Semibold.otf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hide()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <Stack
            initialRouteName={'(auth)'}
            screenOptions={{
                headerShown: false,
                animation: 'none',
            }}
        >
            <Stack.Screen name={'(auth)'} options={{ headerShown: false }} />
            <Stack.Screen name={'(main)'} options={{ headerShown: false }} />
            <Stack.Screen name={'(ext)'} options={{ headerShown: false }} />
            <Stack.Screen name={'(modals)/overlay'} options={{ headerShown: false }} />
        </Stack>
    )
}