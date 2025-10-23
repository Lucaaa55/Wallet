import { Alert, Button, Dimensions, Image, Keyboard, Linking, NativeModules, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useLocalSearchParams, useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { useNotes } from '@/hooks/useNotes'
import { ArrowLeft, Plus, Search } from 'lucide-react-native'
import { Chat } from '@/types/include'
import ContextMenu from 'react-native-context-menu-view'
import { config } from '$/extra/config'
import { SafeAreaView } from 'react-native-safe-area-context'
import { OtpInput } from 'react-native-otp-entry'
import ToastManager, { Toast } from 'toastify-react-native'
import { getEmailClients } from 'react-native-email-link'
import * as Clipboard from 'expo-clipboard'

const toastConfig = {
    success: (props: any) => (
        <View style={{ backgroundColor: '#4CAF50', padding: 16, borderRadius: 10, marginTop: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.text1}</Text>
            {props.text2 && <Text style={{ color: 'white' }}>{props.text2}</Text>}
        </View>
    ),
}

export default function Page() {
    const router = useRouter()
    
    const params = useLocalSearchParams()
    const { email } = params

    const [code, setCode] = useState('')
    const [error, setError] = useState(false)

    const Resend = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        Toast.success('Código enviado')
        Keyboard.dismiss()
        setError(false)
        setCode('')
    }

    const AbrirCorreo = async () => {
        //!! TODO: Add other email clients
        
        const clients = await getEmailClients()
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

        Linking.openURL(`${clients[0].prefix}`)
    }

    const Press = async () => {
        if (code.length === 6) {
            router.push('(main)')
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        Toast.success('Código enviado');

        (async () => {
            const text = await Clipboard.getStringAsync()
            setCode(text)
        })()
    }, [])

    return (
        <>
            <StatusBar barStyle={'default'} />

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                        router.push('(auth)/register')
                    }}>
                        <ArrowLeft size={30} color={colors.yellow} />
                    </TouchableOpacity>

                    <View style={styles.headerTitle}>
                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.headerTitleText}>Te damos la bienvenida</Text>
                            <View style={styles.headerTitleSubtextContainer}>
                                <Text style={styles.headerTitleSubtext}>Enviamos un código a </Text>
                                <Text style={[styles.headerTitleSubtext, {
                                    fontWeight: '600',
                                }]}>{email}</Text>
                            </View>
                        </View>

                        <View style={styles.headerInput}>
                            <OtpInput
                                onBlur={() => {
                                    Keyboard.dismiss()
                                }}
                                blurOnFilled={true}
                                numberOfDigits={6} 
                                onTextChange={(text) => setCode(text)} 
                                focusColor={error ? colors.red : colors.yellow}
                                type={'numeric'}
                                theme={{
                                    containerStyle: styles.headerInputOtp,
                                    pinCodeTextStyle: styles.headerInputOtpText,
                                }}
                            />

                            <View style={styles.headerInputOtpTextContainer}>
                                <Text style={styles.headerInputOtpTextText}>¿No recibiste el código?</Text>
                                <TouchableOpacity onPress={Resend}>
                                    <Text style={[styles.headerInputOtpTextText, {
                                        color: colors.yellow,
                                        textDecorationLine: 'underline',
                                        textDecorationStyle: 'solid',
                                        fontWeight: '600',
                                    }]}>Reenviar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity onPress={AbrirCorreo} style={styles.openMailContainer}>
                        <Text style={styles.openMailText}>Abrir correo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={code.length === 6 ? false : true} activeOpacity={1} style={[styles.bottomButton, {
                        backgroundColor: code.length === 6 ? colors.yellow : colors.soft,
                    }]} onPress={Press}>
                        <Text style={[styles.bottomButtonText, {
                            color: code.length === 6 ? colors.white : colors.gray,
                        }]}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ToastManager config={toastConfig} />
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
    header: {
        width: '100%',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 15,
    },
    headerButton: {
        marginLeft: '5%',
    },
    headerTitle: {
        width: '100%',
        marginLeft: '8%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    headerTitleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerInput: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    headerInputText: {
        fontSize: 15,
        color: colors.gray,
    },
    headerInputField: {
        fontSize: 15,
        color: colors.gray,
        padding: 10,
        height: 50,
        borderColor: colors.soft,
        borderRadius: 12,
        width: '82%',
        borderWidth: 1,
    },
    headerInputError: {
        fontSize: 12,
        color: colors.red,
    },
    headerTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    headerTitleSubtext: {

    },
    headerTitleSubtextContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    headerInputOtp: {
        width: '82%',
    },
    headerInputOtpText: {
        fontSize: 17,
    },
    bottomContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        marginBottom: '5%',
    },
    bottomButton: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: 60,
        borderRadius: 12,
    },
    bottomButtonText: {
        fontSize: 15,
        color: colors.white,
        fontWeight: '500',
    },
    bottomText: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    bottomTextText: {
        fontSize: 13,
        color: colors.gray,
    },
    headerInputOtpTextContainer: {
        width: '82%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    headerInputOtpTextText: {
        fontSize: 13,
        color: colors.gray,
    },
    openMailContainer: {},
    openMailText: {
        fontWeight: '600',
        color: colors.yellow,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    },
})