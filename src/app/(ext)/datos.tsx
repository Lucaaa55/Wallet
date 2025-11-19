import { Alert, Button, Dimensions, Image, NativeModules, RefreshControl, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { useNotes } from '@/hooks/useNotes'
import { Plus, Search } from 'lucide-react-native'
import { Chat } from '@/types/include'
import ContextMenu from 'react-native-context-menu-view'
import { config } from '$/extra/config'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar barStyle={'default'} />

            <SafeAreaView style={styles.container}>
                <Text>Datos</Text>
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