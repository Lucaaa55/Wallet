import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '$/extra/colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { CreditCard, Home, House, icons, User, UserCircle } from 'lucide-react-native'
import { router } from 'expo-router'
import * as Haptics from 'expo-haptics'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const insets = useSafeAreaInsets()

    return (
        <View style={[styles.container, { paddingBottom: insets.bottom }]}>
            {state.routes.map((route, index) => {
                const Icon = icons[route.params?.icon]
                const isFocused = state.index === index

                const onPress = async () => {
                    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                    router.push(route.name === 'index' ? '/' : route.name)
                }
                
                if (!Icon) return null


                if (route.name === 'scan') {
                    return (
                        <TouchableOpacity onPress={onPress} key={index} activeOpacity={1} style={[styles.scan]}>
                            <Icon size={25} color={colors.white} strokeWidth={1.6} />
                        </TouchableOpacity>
                    )
                }

                return (
                    <TouchableOpacity onPress={onPress} key={index} activeOpacity={1} style={[styles.tab]}>
                        <Icon size={25} color={isFocused ? colors.yellow : colors.gray} strokeWidth={1.6} />
                        <Text style={[styles.tabText, { color: isFocused ? colors.yellow : colors.gray }]}>{descriptors[route.key].options.tabBarLabel}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: colors.border,
        width: '100%',
        height: '11%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        alignContent: 'center',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10%',
        transform: [
            {
                scale: 1,
            }
        ]
    },
    sTab: {
        width: 65,
        height: 65,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
    },
    tabText: {
        color: colors.gray,
        fontSize: 11,
    },
    scan: {
        width: 65,
        height: 65,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.violet,
        marginBottom: '12%',
    },
})