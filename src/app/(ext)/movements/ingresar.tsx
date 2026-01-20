import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { ingresar } from '$/extra/ingresar'
import { SvgUri } from 'react-native-svg'
import { ArrowLeft } from 'lucide-react-native'

export default function Page() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar style={'auto'} />

            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                    {ingresar.options.map((option) => (
                        <View key={option.value} style={styles.option}>
                            <SvgUri uri={option.icon} width={35} height={35} />
                            <Text style={styles.optionLabel}>{option.label}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.back,
        gap: '2%',
    },
    scrollView: {
        paddingHorizontal: '5%',
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    option: {
        width: '47.5%',
        padding: '5%',
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 16,
    },
    optionImage: {
        width: 20,
        height: 20,
    },
    optionLabel: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.black,
    },
})