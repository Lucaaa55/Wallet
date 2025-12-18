import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as Haptics from 'expo-haptics'
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs"
import { PlatformPressable } from "@react-navigation/elements";

export function HapticButton(props: BottomTabBarButtonProps) {
    return (
        <PlatformPressable {...props} onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)} />
    )
}