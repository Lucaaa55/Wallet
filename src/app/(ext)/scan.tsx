import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useCameraPermission, useCameraDevice, Camera, useCodeScanner } from 'react-native-vision-camera'
import { ArrowLeft, Flashlight } from 'lucide-react-native'
import { BlurView } from 'expo-blur'
import * as Haptics from 'expo-haptics'

export default function Page() {
    const router = useRouter()

    const [torch, setTorch] = useState<'on' | 'off'>('off')
    
    const codeScanner = useCodeScanner({
        codeTypes: [
            'qr',
        ],
        onCodeScanned: (result) => {
            console.log(result)
        },
    })

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
            <StatusBar style={'light'} />

            <View style={styles.container}>
                <TouchableOpacity style={styles.back} onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    router.back()
                }}>
                    <ArrowLeft size={30} color={colors.blue} />
                </TouchableOpacity>

                <Camera codeScanner={codeScanner} torch={torch} device={camera} isActive={true} style={styles.camera} />
                
                <TouchableOpacity onPress={() => setTorch(torch === 'on' ? 'off' : 'on')} style={styles.torch}>
                    <Flashlight size={22} strokeWidth={1.6} color={colors.black} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        position: 'absolute',
        left: '5%',
        top: '10%',
        zIndex: 1,
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    torch: {
        position: 'absolute',
        bottom: '10%',
        borderRadius: 999,
        padding: 10,
        width: 50,
        backgroundColor: colors.lightGray + '80',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})