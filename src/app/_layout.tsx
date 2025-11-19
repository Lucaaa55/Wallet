import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack } from 'expo-router'
import { Tabs } from 'expo-router/tabs'
import { StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'

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
    
    if (!loaded) {
        return null    
    }

    return (
        <Tabs
            initialRouteName={'(auth)'}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    display: 'none',
                },
            }}
        >
            <Tabs.Screen name={'(auth)'} options={{ headerShown: false }} />
            <Tabs.Screen name={'(main)'} options={{ headerShown: false }} />
            <Tabs.Screen name={'(modals)/overlay'} options={{ headerShown: false }} />
        </Tabs>
    )
}