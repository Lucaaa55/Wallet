import { StyleSheet, Text } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function Page() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar style={'auto'} />

            <SafeAreaView style={styles.container}>
                <Text>Transacciones</Text>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.back,
    },
})