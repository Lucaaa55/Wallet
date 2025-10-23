import { Alert, Button, Dimensions, Image, NativeModules, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { useNotes } from '@/hooks/useNotes'
import { Delete, Plus, ScanFace, Search } from 'lucide-react-native'
import { Chat } from '@/types/include'
import ContextMenu from 'react-native-context-menu-view'
import { config } from '$/extra/config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { urls } from '@/constants/urls'
import { SvgUri } from 'react-native-svg'
import * as LocalAuthentication from 'expo-local-authentication'

export default function Page() {
    const router = useRouter()

    const [pin, setPin] = useState<number[]>([])
    const [tries, setTries] = useState(0)
    const pinLength = Array(6).fill(0)

    useEffect(() => {
        if (pin.length === 6 && tries < 3) {
            if (pin.join('') === '000000') {
                router.replace('(main)')
                setPin([])
            } else {
                setTries(tries + 1)
                setPin([])
            }
        }
    }, [pin])


    const onFaceIDPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        LocalAuthentication.authenticateAsync({
            promptMessage: 'Escanea tu cara para ingresar',
        })
        .then((result) => {
            if (result.success) {
                router.replace('(main)')
            } else {
                setTries(tries + 1)
            }
        })
    }

    const onNumberPress = (number: number) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        setPin([...pin, number])
    }

    const onBackPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        setPin(pin.slice(0, -1))
    }

    return (
        <>
            <StatusBar barStyle={'default'} />

            <SafeAreaView style={styles.container}>
                <View />

                <View style={styles.top}>
                    <SvgUri
                        uri={urls.images}
                        style={styles.image}
                    />

                    <View style={styles.dotsContainer}>
                        {[...Array(6)].map((_, i) => (
                            <View
                                key={i}
                                style={[
                                    styles.dot,
                                    i < pin.length ? styles.dotFilled : styles.dotEmpty,
                                ]}
                            />
                        ))}
                    </View>

                    {/* {
                        tries >= 3 ? (
                            <Text style={styles.error}>Intentos máximos</Text>
                        ) : (
                            <Text style={styles.error}>Intentos restantes: {3 - tries}</Text>
                        )
                    } */}
                </View>

                <View style={styles.keypad}>
                    <View style={styles.row}>
                    {[1, 2, 3].map((num) => (
                        <TouchableOpacity
                        key={num}
                        style={styles.key}
                        onPress={() => onNumberPress(num)}
                        >
                        <Text style={styles.keyText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>

                    <View style={styles.row}>
                    {[4, 5, 6].map((num) => (
                        <TouchableOpacity
                        key={num}
                        style={styles.key}
                        onPress={() => onNumberPress(num)}
                        >
                        <Text style={styles.keyText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>

                    <View style={styles.row}>
                    {[7, 8, 9].map((num) => (
                        <TouchableOpacity
                        key={num}
                        style={styles.key}
                        onPress={() => onNumberPress(num)}
                        >
                        <Text style={styles.keyText}>{num}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => onFaceIDPress()} style={styles.key}>
                            <ScanFace size={25} color={colors.black} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.key} onPress={() => onNumberPress(0)}>
                            <Text style={styles.keyText}>0</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.key} onPress={onBackPress}>
                            <Delete size={25} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white,
    },
    error: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.red,
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
    },
    dotsContainer: {
        flexDirection: 'row',
        marginVertical: '15%',
        gap: 20,
    },
    dot: {
        width: 25,
        height: 25,
        borderRadius: 999999,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    dotFilled: {
        backgroundColor: colors.yellow,
    },
    dotEmpty: {
        backgroundColor: colors.soft,
    },
    keypad: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    key: {
        borderRadius: 4,
        width: '30%',
        aspectRatio: 1.75,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1.5%',
        backgroundColor: colors.light,
    },
    keyText: {
        fontSize: 25,
        fontWeight: '400',
    },
    image: {
        width: '100%',
        height: '100%',
    },
})