import { Alert, Button, Dimensions, Image, NativeModules, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { useNotes } from '@/hooks/useNotes'
import { BanknoteArrowDown, MoveRight, Plus, QrCode, Search } from 'lucide-react-native'
import { Chat } from '@/types/include'
import ContextMenu from 'react-native-context-menu-view'
import { config } from '$/extra/config'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
    const router = useRouter()
    
    const [amount, setAmount] = useState('$1,000.00')

    useEffect(() => {
        
    }, [])

    return (
        <>
            <StatusBar barStyle={'default'} />

            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>Hola, {'Luca'}!</Text>
                </View>
                <ScrollView contentContainerStyle={styles.content} style={styles.scrollView}>
                    <Text>Hola</Text>

                    <View style={styles.view}>
                        <Text style={styles.amount}>{amount}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.action}>
                                <QrCode size={27} color={colors.blue} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <BanknoteArrowDown size={27} color={colors.blue} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <MoveRight size={27} color={colors.blue} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text>Hola</Text>
                    </View>
                </ScrollView>
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
        backgroundColor: colors.darkGray,
        gap: '5%',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10%',
    },
    action: {
        width: 60,
        height: 60,
        borderRadius: 999,
        backgroundColor: colors.blueSoft,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: '90%',
        height: '30%',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        gap: '10%',
    },
    scrollView: {
        flexGrow: 0,
        height: '100%',
        width: '100%',
        backgroundColor: colors.back,
    },
    content: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '5%',
    },
    amount: {
        fontSize: 50,
        fontWeight: '500',
        color: colors.black,
        fontFamily: 'Aalto',
    },
    cotis: {
        width: '90%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        height: 100,
        borderRadius: 12,
    },
})