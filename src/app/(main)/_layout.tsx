import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { Platform, StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'
import { Home, CreditCard, UserCircle, ReceiptText, Scroll, ScrollText } from 'lucide-react-native'
import UserInactivityProvider from '@/context/UserInactivityProvider'
import TabIcon from '@/components/TabIcon'

export default function Layout() {
    return (
        <UserInactivityProvider>
            <Tabs
                initialRouteName={'index'}
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: Platform.OS === 'ios' ? 90 : 120,
                    },
                    tabBarItemStyle: {
                        marginTop: '3%',
                    },
                    tabBarActiveTintColor: colors.violeta,
                    tabBarInactiveTintColor: colors.gray,
                }}
            >
                <Tabs.Screen name={'index'} options={{
                    headerShown: false,
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Home size={size} color={color} strokeWidth={1.6} />
                        // <TabIcon color={color} size={size} Icon={Home} path={'/(main)/'} />
                    ),
                }} />
                <Tabs.Screen name={'cards'} options={{
                    headerShown: false,
                    tabBarLabel: 'Tarjetas',
                    tabBarIcon: ({ color, size }) => (
                        <CreditCard size={size} color={color} strokeWidth={1.6} />
                        // <TabIcon color={color} size={size} Icon={CreditCard} path={'/(main)/cards'} />
                    ),
                }} />
                <Tabs.Screen name={'settings'} options={{
                    headerShown: false,
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color, size }) => (
                        <UserCircle size={size} color={color} strokeWidth={1.6} />
                        // <TabIcon color={color} size={size} Icon={UserCircle} path={'/(main)/settings'} />
                    ),
                }} />
            </Tabs>
        </UserInactivityProvider>
    )
}