import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { ChevronRight } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { tarjetas } from '$/extra/tarjetas'
import { LinearGradient as LinearGradientComponent } from 'expo-linear-gradient'
import { VisaIcon } from '@/components/VisaIcon'
import { StatusBar } from 'expo-status-bar'

export default function Page() {
    const router = useRouter()
    
    const Press = (id: number) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push(`/(main)/card/${id}`)
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar style={'auto'} />

            <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Tarjetas</Text>

                    <View style={styles.cardsContainer}>
                        {tarjetas.map((tarjeta, index) => (
                            <View key={index} style={styles.card}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardHeaderText}>{tarjeta.name}</Text>
                                    <Text style={styles.cardHeaderSubText}>{tarjeta.description}</Text>
                                </View>

                                <Pressable onPress={() => Press(tarjeta.id)}>
                                    <LinearGradientComponent colors={[colors.violeta, colors.black]} style={styles.cardContainer}>
                                        <View style={styles.top}>
                                            <Text style={styles.cardBank}>HOOP</Text>
                                            <ChevronRight size={30} color={colors.white} strokeWidth={1.5} />
                                        </View>
                                        <View style={styles.bottom}>
                                            <View style={styles.tags}>
                                                <Text style={styles.tag}>Virtual</Text>
                                                <Text style={styles.digits}>•••• {tarjeta.number.slice(-4)}</Text>
                                            </View>

                                            <VisaIcon />
                                        </View>
                                    </LinearGradientComponent>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: colors.dark,
        marginBottom: 8,
        padding: '7%',
        paddingTop: '5%',
        paddingBottom: '5%',
    },
    cardsContainer: {
        gap: '5%',
        flexDirection: 'column',
    },
    card: {
        gap: '7%',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 16,
        marginHorizontal: '5%',
        height: 'auto',
    },
    cardHeader: {
        padding: 7,
        gap: '2%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardHeaderText: {
        fontSize: 17,
        fontWeight: '500',
        color: colors.dark,
    },
    cardHeaderSubText: {
        fontSize: 13,
        fontWeight: '500',
        color: colors.gray,
    },
    scrollView: {
        flex: 1,
    },
    content: {},
    cardContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: 150,
        borderRadius: 12,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    cardBank: {
        fontSize: 16,
        fontFamily: 'InstaSans',
        color: colors.white,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    tags: {
        flexDirection: 'row',
        gap: '10%',
        alignItems: 'center',
    },
    tag: {
        padding: '3%',
        backgroundColor: `${colors.white}20`,
        fontSize: 12,
        fontWeight: '500',
        color: colors.white,
        borderRadius: 999,
    },
    digits: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.white,
    },
})