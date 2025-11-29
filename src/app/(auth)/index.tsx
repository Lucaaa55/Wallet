import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function Page() {
    const router = useRouter()

    const animatedHeight = useSharedValue(0)
    const animatedOpacity = useSharedValue(0)

    const vStyle = useAnimatedStyle(() => {
        return {
            height: animatedHeight.value,
        }
    })

    const tStyle = useAnimatedStyle(() => {
        return {
            opacity: animatedOpacity.value,
        }
    })

    const Press = async (path: string) => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push(path)
    }
    
    useEffect(() => {
        animatedHeight.value = withSpring(250)
        animatedOpacity.value = withTiming(1, {
            duration: 2500,
        })
    }, [])

    return (
        <>
            <StatusBar style={'auto'} />

            <SafeAreaView style={styles.container}>

                {/* Icon */}

                <Animated.View style={[styles.view, vStyle]}>
                    <TouchableOpacity activeOpacity={1} style={[styles.button, {
                        backgroundColor: colors.soft,
                    }]} onPress={() => Press('/login')}>
                        <Text style={[styles.buttonText, {
                            color: colors.black,
                        }]}>Ya tengo cuenta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.button, {
                        backgroundColor: colors.violet,
                    }]} onPress={() => Press('/register')}>
                        <Text style={[styles.buttonText, {
                            color: colors.white,
                        }]}>Quiero crear mi cuenta</Text>
                    </TouchableOpacity>
                </Animated.View>
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
        backgroundColor: colors.violet,
    },
    icon: {
        opacity: 0,
        fontSize: 40,
        color: colors.white,
        fontFamily: 'Tailwind',
        position: 'absolute',
        top: '25%',
    },
    view: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.white,
        gap: '5%',
    },
    button: {
        width: '90%',
        height: 60,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '500',
    },
})