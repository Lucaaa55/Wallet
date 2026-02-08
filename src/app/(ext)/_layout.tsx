import { colors } from '$/extra/colors'
import { router, Stack } from 'expo-router'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
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
                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <ArrowLeft size={25} strokeWidth={1.6} color={colors.blue} />
                    </Pressable>
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