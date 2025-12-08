import { useEffect, useRef, useState } from 'react'
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { ArrowUp, ChevronRight, CircleDollarSign, Eye, EyeOff, Link, Scan, ScanQrCode } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { useSharedValue } from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'
import { events } from '$/extra/events'
import { movements } from '$/extra/movements'

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
    const [amount, setAmount] = useState('346.583,05')
    const [scrollY, setScrollY] = useState(0)
    const [growthPercentage, setGrowthPercentage] = useState('0')
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

            <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
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
                        <View style={styles.indicators}>
                            <View style={styles.indicator}>
                                <Text style={styles.indicatorText}>Balance</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={events.Datos} style={styles.indicatorEyeContainer}>
                                <Text style={styles.indicatorText}>Datos de la cuenta</Text>
                                <ChevronRight size={20} strokeWidth={2} color={colors.light} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}>$ {hide ? '****' : amount}</Text>
                            <View style={styles.growthContainer}>
                                <ArrowUp size={15} strokeWidth={2} color={colors.growthGreen} />
                                <Text style={styles.growthText}>{growthPercentage}</Text>
                                <Text style={styles.growthPercentage}>%</Text>
                            </View>
                        </View>
                        <View style={styles.actions}>
                            <View style={styles.actionContainer}>
                                <TouchableOpacity activeOpacity={1} onPress={events.Ingresar} style={styles.action}>
                                    <Text style={styles.actionText}>Ingresar</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.actionContainer}>
                                <TouchableOpacity activeOpacity={1} onPress={events.Retirar} style={styles.action}>
                                    <Text style={styles.actionText}>Retirar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.actionButtons}>
                        <TouchableOpacity activeOpacity={0.8} onPress={events.Scan} style={styles.actionButton}>
                            <ScanQrCode size={20} strokeWidth={2} color={colors.gray} />
                            <Text style={styles.actionButtonText}>Pagar con QR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={events.Links} style={styles.actionButton}>
                            <Link size={20} strokeWidth={2} color={colors.gray} />
                            <Text style={styles.actionButtonText}>Links de pago</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cotis}>
                        <View style={styles.cotisHeader}>
                            <Text style={styles.cotisHeaderText}>Cotizaciones</Text>
                        </View>
                        <View style={styles.cotisContent}>
                            <View style={[styles.cotisItem, {
                                marginLeft: 20,
                            }]}>
                                <Text style={styles.cotisItemText}>Compra</Text>
                                <Text style={styles.cotisItemValue}>{cotis.compra} ARS</Text>
                            </View>
                            <View style={[styles.cotisItem, {
                                marginRight: 20,
                            }]}>
                                <Text style={styles.cotisItemText}>Venta</Text>
                                <Text style={styles.cotisItemValue}>{cotis.venta} ARS</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={styles.movementsContainer}>
                        <Text style={styles.movementsText}>Movimientos</Text>

                        <ScrollView nestedScrollEnabled={true} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} style={styles.movementsItems}>
                            {movements.map((movement, index) => (
                                <View key={index} style={styles.movementsItem}>
                                    <CircleDollarSign size={20} strokeWidth={2} color={colors.violet} />

                                    <Text style={styles.movementsItemText}>{movement.store}</Text>
                                    <Text style={styles.movementsItemAmount}>{movement.amount}</Text>
                                </View>
                            ))}
                        </ScrollView>
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
    actionContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    action: {
        width: 130,
        height: 50,
        borderRadius: 12,
        backgroundColor: colors.violeta,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText: {
        fontSize: 18,
        fontWeight: '500',
        color: colors.white,
    },
    view: {
        borderRadius: 12,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.white,
        alignItems: 'center',
        gap: '15%',
        padding: '3%',
        marginHorizontal: '5%',
        borderWidth: 1,
        borderColor: colors.border,
    },
    scrollView: {},
    amount: {
        fontSize: 30,
        fontWeight: '600',
        color: colors.darkGray,
    },
    cotis: {
        padding: '3%',
        marginHorizontal: '5%',
        gap: '5%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 12,
    },
    indicators: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    indicator: {},
    indicatorText: {
        fontSize: 15,
        fontWeight: '500',
        color: colors.gray,
    },
    indicatorEyeContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    amountContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2%',
        marginRight: 'auto',
        marginLeft: '5%',
    },
    amountSymbol: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.black,
    },
    actionButtons: {
        marginHorizontal: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5%',
    },
    actionButton: {
        paddingHorizontal: '2%',
        paddingVertical: '6%',
        borderRadius: 6,
        backgroundColor: colors.soft,
        display: 'flex',
        flexDirection: 'row',
        gap: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonText: {
        fontSize: 15.5,
        fontWeight: '600',
        color: colors.black,
    },
    growthContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        backgroundColor: colors.lightGreen,
        borderRadius: 9999,
        paddingHorizontal: 7,
        paddingVertical: 4,
    },
    growthText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.growthGreen,
    },
    growthPercentage: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.growthGreen,
    },
    cotisHeader: {
        marginLeft: 20,
    },
    cotisHeaderText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.gray,
    },
    cotisContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cotisItem: {
        gap: '10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cotisItemText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.black,
    },
    cotisItemValue: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.growthGreen,
    },
    carouselItem: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flag: {
        borderRadius: 999,
        width: 20,
        height: 20,
    },
    movementsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5%',
        marginHorizontal: '5%',
        marginTop: '5%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 12,
    },
    movementsScrollView: {},
    movementsText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.gray,
        marginLeft: '10%',
        marginTop: '7%',
    },
    movementsItems: {
        flexDirection: 'column',
        gap: '5%',
        padding: '5%',
    },
    movementsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})