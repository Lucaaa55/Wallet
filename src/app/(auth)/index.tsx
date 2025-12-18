import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Svg, { Path } from 'react-native-svg'

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
                <View style={styles.top}>
                    <Svg style={styles.melt} viewBox="0 0 1440 320"><Path fill={colors.white} fill-opacity="1" d="M0,192L20,197.3C40,203,80,213,120,197.3C160,181,200,139,240,133.3C280,128,320,160,360,176C400,192,440,192,480,181.3C520,171,560,149,600,144C640,139,680,149,720,144C760,139,800,117,840,117.3C880,117,920,139,960,149.3C1000,160,1040,160,1080,154.7C1120,149,1160,139,1200,112C1240,85,1280,43,1320,26.7C1360,11,1400,21,1420,26.7L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></Path></Svg>
                </View>

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
        backgroundColor: colors.yellow,
    },
    top: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '40%',
        backgroundColor: colors.white,
    },
    melt: {
        position: 'absolute',
        bottom: '-63%',
        width: '100%',
        height: '100%',
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