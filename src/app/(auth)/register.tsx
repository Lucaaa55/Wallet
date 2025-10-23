import { Alert, Button, Dimensions, Image, NativeModules, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { useNotes } from '@/hooks/useNotes'
import { ArrowLeft, ChevronLeft, Plus, Search } from 'lucide-react-native'
import { Chat } from '@/types/include'
import ContextMenu from 'react-native-context-menu-view'
import { config } from '$/extra/config'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [continued, setContinued] = useState(false)

    const Press = async () => {
        setContinued(true)

        if (email.length > 0 && email.includes('@')) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            router.push({
                pathname: '(auth)/onboarding/otp',
                params: {
                    email: email,
                },
            })
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            setError(true)
        }
    }

    const Switch = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        router.push('(auth)/login')
    }

    useEffect(() => {
        if (continued) {
            if (email.length > 0 && email.includes('@')) {
                setError(false)  
            } else {
                setError(true)
            }
        }
    }, [email])

    return (
        <>
            <StatusBar barStyle={'default'} />

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerButton} onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                        router.push('(auth)')
                    }}>
                        <ArrowLeft size={30} color={colors.yellow} />
                    </TouchableOpacity>

                    <View style={styles.headerTitle}>
                        <Text style={styles.headerTitleText}>Ingresa tu email</Text>

                        <View style={styles.headerInput}>
                            <Text style={styles.headerInputText}>Email</Text>
                            <TextInput 
                                style={styles.headerInputField} 
                                placeholder={'Escribe tu email...'} 
                                value={email}
                                onChangeText={setEmail}
                                maxLength={40}
                                keyboardType={'email-address'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                autoComplete={'email'}
                                autoFocus={true}
                            />
                            {error ? <Text style={styles.headerInputError}>Email inválido</Text> : ''}
                        </View>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.legalTextContainer}>
                        <Text style={styles.legalText}>Al continuar, aceptas los</Text>
                        <View style={styles.legalTextLink}>
                            <Text  style={[styles.legalText, {
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                            }]}> Términos y Condiciones</Text>
                            <Text style={styles.legalText}> y</Text>
                            <Text style={[styles.legalText, {
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'solid',
                            }]}> la Politica de privacidad.</Text>
                        </View>
                    </View>

                    <TouchableOpacity disabled={email.length > 0 ? false : true} activeOpacity={1} style={[styles.bottomButton, {
                        backgroundColor: email.length > 0 ? colors.yellow : colors.soft,
                    }]} onPress={Press}>
                        <Text style={[styles.bottomButtonText, {
                            color: email.length > 0 ? colors.white : colors.gray,
                        }]}>Continuar</Text>
                    </TouchableOpacity>

                    <View style={styles.bottomText}>
                        <Text style={styles.bottomTextText}>¿Ya tenés una cuenta?</Text>
                        <TouchableOpacity onPress={() => Switch()}>
                            <Text style={styles.bottomTextButtonText}>Inicia sesión</Text>
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
        gap: 12,
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
    bottomTextButtonText: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.yellow,
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    legalTextContainer: {
        width: '70%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    legalText: {
        fontSize: 13,
        color: colors.gray,
    },
    legalTextLink: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})