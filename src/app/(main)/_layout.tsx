import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'
import { Home, CreditCard, UserCircle, ReceiptText } from 'lucide-react-native'
import UserInactivityProvider from '@/context/UserInactivityProvider'

export default function Layout() {
    return (
        <UserInactivityProvider>
            <Tabs
                initialRouteName={'index'}
                screenOptions={{
                    headerShown: false,
                    tabBarItemStyle: {
                        marginTop: '3%',
                    },
                    tabBarActiveTintColor: colors.blue,
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
                <Tabs.Screen name={'cards'} options={{
                    headerShown: false,
                    tabBarLabel: 'Tarjetas',
                    tabBarIcon: ({ color, size }) => (
                        <CreditCard size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
                <Tabs.Screen name={'facturas'} options={{
                    headerShown: false,
                    tabBarLabel: 'Facturas',
                    tabBarIcon: ({ color, size }) => (
                        <ReceiptText size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
                <Tabs.Screen name={'settings'} options={{
                    headerShown: false,
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color, size }) => (
                        <UserCircle size={size} color={color} strokeWidth={1.5} />
                    ),
                }} />
                <Tabs.Screen name={'[transactionId]'} options={{
                    headerShown: false,
                    tabBarItemStyle: {
                        display: 'none',
                        },
                }} />
            </Tabs>
        </UserInactivityProvider>
    )
}