import { colors } from '$/extra/colors'
import { router, Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'lucide-react-native'

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerTransparent: false,
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <ArrowLeft size={25} strokeWidth={1.6} color={colors.blue} />
                    </TouchableOpacity>
                ),
                animation: 'default',
            }}
        >
            <Stack.Screen name={'index'} options={{
                title: '',
            }} />
            <Stack.Screen name={'[transactionId]'} options={{
                title: 'Transacción',
            }} />
            <Stack.Screen name={'datos'} options={{
                title: 'Datos bancarios',
            }} />
            <Stack.Screen name={'links'} options={{
                title: 'Links de pago',
            }} />
            <Stack.Screen name={'movements/ingresar'} options={{
                title: 'Recibir dinero',
            }} />
            <Stack.Screen name={'movements/retirar'} options={{
                title: 'Retirar dinero',
            }} />
            <Stack.Screen name={'scan'} options={{
                headerShown: false,
            }} />
            <Stack.Screen name={'transactions'} options={{
                title: 'Transacciones',
            }} />
            <Stack.Screen name={'more'} options={{
                title: 'Más',
            }} />
        </Stack>
    )
}