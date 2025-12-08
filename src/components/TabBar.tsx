import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '$/extra/colors'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Home, Icon, Scan } from 'lucide-react-native'
import { router } from 'expo-router'
import * as Haptics from 'expo-haptics'

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index

                const onPress = () => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                    router.push(route.name)
                }

                if (route.name === 'scan') {
                    return (
                        <TouchableOpacity key={route.name} onPress={onPress} style={[styles.tab]}>
                            <View style={styles.scan}>
                                <Scan strokeWidth={1.7} size={24} color={colors.white} />
                            </View>
                        </TouchableOpacity>
                    )
                }

                return (
                    <TouchableOpacity key={route.name} onPress={onPress} style={styles.tab}>
                        <Home strokeWidth={1.7} size={24} color={isFocused ? colors.violet : colors.gray} />
                        <Text style={[styles.tabText, { color: isFocused ? colors.violet : colors.gray }]}>{descriptors[route.key].options.tabBarLabel}</Text>
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
        paddingVertical: '7.5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 42,
        borderTopRightRadius: 42,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5%',
    },
    tabText: {
        color: colors.gray,
        fontSize: 12,
    },
    scan: {
        width: 75,
        height: 75,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.violet,
        position: 'absolute',
        bottom: '-25%',
    },
})