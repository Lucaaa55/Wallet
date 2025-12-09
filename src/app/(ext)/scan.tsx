import { StyleSheet, View } from 'react-native'
import { useEffect } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useCameraPermission, useCameraDevice, Camera } from 'react-native-vision-camera'

export default function Page() {
    const router = useRouter()

    const camera = useCameraDevice('back', {
        physicalDevices: [
            'ultra-wide-angle-camera',
            'wide-angle-camera',
            'telephoto-camera',
        ]
    })
    const { hasPermission, requestPermission } = useCameraPermission()

    useEffect(() => {
        if (!hasPermission) {
            requestPermission()
        }
    }, [])

    if (!camera) {
        return null
    }

    return (
        <>
            <StatusBar style={'auto'} />

            <View style={styles.container}>
                <Camera device={camera} isActive={true} style={styles.camera} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
    },
    camera: {
        flex: 1,
    },
})