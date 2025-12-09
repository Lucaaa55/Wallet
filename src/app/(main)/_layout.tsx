import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { Platform, StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'
import { CreditCard, UserCircle, House } from 'lucide-react-native'
import UserInactivityProvider from '@/context/UserInactivityProvider'
import { TabBar } from '@/components/TabBar'

export default function Layout() {
    return (
        <UserInactivityProvider>
            <Tabs
                initialRouteName={'index'}
                screenOptions={{
                    headerShown: false,
                }}
                tabBar={(props) => <TabBar {...props} />}
            >
                <Tabs.Screen name={'index'} options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                }} initialParams={{
                    icon: 'House',
                }} />
                <Tabs.Screen name={'cards'} options={{
                    headerShown: false,
                    tabBarLabel: 'Tarjetas',
                }} initialParams={{
                    icon: 'CreditCard',
                }} />
                <Tabs.Screen name={'settings'} options={{
                    headerShown: false,
                    tabBarLabel: 'Cuenta',
                }} initialParams={{
                    icon: 'CircleUserRound',
                }} />
            </Tabs>
        </UserInactivityProvider>
    )
}