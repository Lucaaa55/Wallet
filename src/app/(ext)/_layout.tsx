import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'
import { Home, CreditCard, UserCircle } from 'lucide-react-native'

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'default',
            }}
        >
            <Stack.Screen name={'index'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'[transactionId]'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'datos'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'scan'} options={{
                headerShown: false,
            }} />
        </Stack>
    )
}