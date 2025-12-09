import { useEffect, useRef, useState } from 'react'
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, Platform, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { ArrowUp, ChevronRight, CircleDollarSign, Eye, EyeOff, Link, Minus, Plus, Scan, ScanQrCode } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { useSharedValue } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { events } from '$/extra/events'
import { movements } from '$/extra/movements'
import Swiper from 'react-native-swiper'
import { SvgUri } from 'react-native-svg'
import { promociones } from '$/extra/promociones'
import { actions } from '$/extra/actions'

const data = [...new Array(3).keys()]

export default function Page() {
    const router = useRouter()

    const carouselRef = useRef<ICarouselInstance>(null)
    const progress = useSharedValue<number>(0)

    const onPressPagination = (index: number) => {
        carouselRef.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        })
    }

    const [hide, setHide] = useState(false)
    const [amount, setAmount] = useState('3.120,01')
    const [scrollY, setScrollY] = useState(0)
    const [growthPercentage, setGrowthPercentage] = useState('2,8')
    const [cotis, setCotis] = useState({
        compra: '1.480,00',
        venta: '1.420,00',
    })

    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        
    }, [])

    const onRefresh = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1500)
    }

    const Hide = () => {
        Haptics.selectionAsync()
        setHide(!hide)
    }

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        setScrollY(event.nativeEvent.contentOffset.y)
    }

    return (
        <>
            <StatusBar style={'auto'} />

            <SafeAreaView edges={['left', 'right', 'top', 'bottom']} style={styles.container}>
                <View style={[styles.header, {
                    borderBottomColor: colors.border,
                    borderBottomWidth: scrollY > 0 ? 1 : 0,
                }]}>
                    <Text style={styles.title}>Hola, {'Luca'}!</Text>
                    <View style={styles.headerButtons}>
                        <TouchableOpacity activeOpacity={0.8} onPress={events.Scan} style={styles.headerEyesContainer}>
                            <Scan size={20} strokeWidth={2} color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={Hide} style={styles.headerEyesContainer}>
                            { hide ? <Eye size={20} strokeWidth={2} color={colors.black} /> : <EyeOff size={20} strokeWidth={2} color={colors.black} /> }
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView onScroll={handleScroll} style={styles.scrollView} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <TouchableOpacity activeOpacity={0.8} onPress={events.Datos} style={styles.view}>
                        <View style={styles.topContainer}>
                            <SvgUri uri={'https://hatscripts.github.io/circle-flags/flags/eu.svg'} width={35} height={35} />
                            <View style={styles.dataContainer}>
                                <Text style={styles.dateText}>Datos de la cuenta</Text>
                                <ChevronRight size={20} strokeWidth={2} color={colors.light} />
                            </View>
                        </View>

                        <View style={styles.bottomContainer}>
                            <Text style={styles.amountText}>
                                { hide ? '$ ******' : `$ ${amount}` }
                            </Text>
                            <View style={styles.growthContainer}>
                                <ArrowUp size={15} strokeWidth={2} color={colors.growthGreen} />
                                <Text style={styles.growthText}>{growthPercentage} %</Text>
                            </View>
                        </View>

                        <View style={styles.actionsButtons}>
                            {actions.map((button, index) => (
                                <TouchableOpacity key={index} activeOpacity={0.8} onPress={button.onPress} style={styles.actionButton}>
                                    <button.icon size={25} strokeWidth={2} color={colors.yellow} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </TouchableOpacity>
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
    header: {
        width: '100%',
        display: 'flex',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        justifyContent: 'space-between',
    },
    headerButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4%',
    },
    headerEyesContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25,
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: colors.black,
        fontFamily: 'Aalto',
        marginLeft: 25,
        marginTop: '3%',
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10%',
    },
    view: {
        borderRadius: 12,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        gap: '15%',
        paddingVertical: '7%',
        padding: '3%',
        marginHorizontal: '5%',
        borderWidth: 1,
        borderColor: colors.border,
    },
    scrollView: {
        flex: 1,
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2%',
        width: '90%',
    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2%',
    },
    dateText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.gray,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5%',
        marginRight: 'auto',
        marginLeft: '5%',
    },
    amountText: {
        fontSize: 30,
        fontWeight: Platform.OS === 'ios' ? '600' : '500',
        color: colors.black,
    },
    growthContainer: {
        display: 'flex',
        gap: '1%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGreen,
        borderRadius: 9999,
        paddingHorizontal: '2%',
        paddingVertical: '1%',
    },
    growthText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.growthGreen,
    },
    actionsButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10%',
        padding: '2%',
        width: '90%',
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '23%',
        aspectRatio: 1,
        backgroundColor: colors.yellow + '25',
        borderRadius: 999,
    },
    movementsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '5%',
        padding: '6%',
        marginHorizontal: '5%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
    },
    movementsText: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.gray,
    },
    movementsItems: {
        flexDirection: 'column',
        gap: '5%',
    },
    swiper: {
        marginHorizontal: '5%',
    },
    swiperItem: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 12,
    },
    swiperImage: {
        width: 300,
        borderRadius: 12,
    },
})