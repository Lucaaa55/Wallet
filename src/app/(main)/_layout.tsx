import { colors } from '$/extra/colors'
import { Tabs } from 'expo-router'
import { CreditCard, UserCircle, House, Globe } from 'lucide-react-native'
import UserInactivityProvider from '@/context/UserInactivityProvider'
import { HapticButton } from '@/components/HapticButton'
import { Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Layout() {
    const insets = useSafeAreaInsets()

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
                        marginBottom: Platform.OS === 'ios' ? 0 : '5%',
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