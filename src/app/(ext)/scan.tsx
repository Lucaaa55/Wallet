import { StyleSheet, View } from 'react-native'
import { useEffect } from 'react'
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