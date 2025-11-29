import { Animated, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import * as Haptics from 'expo-haptics'
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useEffect } from 'react'
import { Home, LucideIcon } from 'lucide-react-native'
import { colors } from '$/extra/colors'
import { router } from 'expo-router'

export default function TabIcon({ color, size, Icon, path}: {
    color: string,
    size: number,
    Icon: LucideIcon,
    path: string,
}) {
    const scale = useSharedValue(1)

    const scaleStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { 
                    scale: withSpring(scale.value) 
                }
            ],
        }
    })

    const onPress = async () => {
        scale.value = 1
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push(path)
    }

    return (
        <Pressable onHoverIn={() => scale.value = 2} onHoverOut={() => onPress()}>
            <Animated.View style={[styles.iconContainer, scaleStyle]}>
                <Icon color={color} size={size} strokeWidth={1.6} />
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 20,
        height: 4,
        borderRadius: 4,
        backgroundColor: colors.violet,
        marginBottom: 5,
    },
    icon: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
})