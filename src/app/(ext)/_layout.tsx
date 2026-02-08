import { colors } from '$/extra/colors'
import { router, Stack } from 'expo-router'
<<<<<<< HEAD
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
=======
import { TouchableOpacity } from 'react-native'
>>>>>>> f009c096b443e01792bec5a493a5a52d259fb583
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
<<<<<<< HEAD
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <ArrowLeft size={25} strokeWidth={1.6} color={colors.blue} />
                    </Pressable>
=======
                    <TouchableOpacity onPress={() => router.back()}>
                        <ArrowLeft size={25} strokeWidth={1.6} color={colors.blue} />
                    </TouchableOpacity>
>>>>>>> f009c096b443e01792bec5a493a5a52d259fb583
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

const styles = StyleSheet.create({
    backButton: {
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})