import { colors } from '$/extra/colors'
import { useFonts } from 'expo-font'
import { router, Stack, Tabs } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { Platform, StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import Svg, { Path } from 'react-native-svg'
import { CreditCard, UserCircle, House, ScanQrCode } from 'lucide-react-native'
import UserInactivityProvider from '@/context/UserInactivityProvider'
import { TabBar } from '@/components/TabBar'
import { HapticButton } from '@/components/HapticButton'
import { SpecialButton } from '@/components/SpecialButton'

export default function Layout() {
    return (
        <UserInactivityProvider>
            <Tabs
                initialRouteName={'index'}
                screenOptions={{
                    headerShown: false,
                    tabBarItemStyle: {
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '5%',
                    },
                    tabBarActiveTintColor: colors.blue,
                    tabBarInactiveTintColor: colors.gray,
                    tabBarStyle: {
                        height: '11.5%',
                        borderTopLeftRadius: 26,
                        borderTopRightRadius: 26,
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderLeftWidth: 1,
                        borderColor: colors.border,
                    },
                    tabBarButton: HapticButton,
                }}
                // tabBar={(props) => <TabBar {...props} />}
            >
                <Tabs.Screen name={'index'} options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <House strokeWidth={1.6} color={color} size={size} />,
                }} />
                <Tabs.Screen name={'cards'} options={{
                    headerShown: false,
                    tabBarLabel: 'Tarjetas',
                    tabBarIcon: ({ color, size }) => <CreditCard strokeWidth={1.6} color={color} size={size} />,
                }} />
                <Tabs.Screen name={'settings'} options={{
                    headerShown: false,
                    tabBarLabel: 'Cuenta',
                    tabBarIcon: ({ color, size }) => <UserCircle strokeWidth={1.6} color={color} size={size} />,
                }} />
            </Tabs>
        </UserInactivityProvider>
    )
}