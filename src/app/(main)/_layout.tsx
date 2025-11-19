import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'
import { Home, CreditCard, UserCircle, ReceiptText, Scroll, ScrollText } from 'lucide-react-native'
import UserInactivityProvider from '@/context/UserInactivityProvider'

export default function Layout() {
    return (
        <UserInactivityProvider>
            <Tabs
                initialRouteName={'index'}
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        // borderTopWidth: 0,
                    },
                    tabBarItemStyle: {
                        marginTop: '3%',
                    },
                    tabBarActiveTintColor: colors.violet,
                    tabBarInactiveTintColor: colors.gray,
                }}
            >
                <Tabs.Screen name={'index'} options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Home size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
                <Tabs.Screen name={'transactions'} options={{
                    headerShown: false,
                    tabBarLabel: 'Actividad',
                    tabBarIcon: ({ color, size }) => (
                        <ScrollText size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
                <Tabs.Screen name={'cards'} options={{
                    headerShown: false,
                    tabBarLabel: 'Tarjetas',
                    tabBarIcon: ({ color, size }) => (
                        <CreditCard size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
                <Tabs.Screen name={'settings'} options={{
                    headerShown: false,
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color, size }) => (
                        <UserCircle size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
            </Tabs>
        </UserInactivityProvider>
    )
}