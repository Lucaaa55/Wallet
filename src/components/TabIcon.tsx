import { Pressable } from 'react-native'
import * as Haptics from 'expo-haptics'

export default function TabIcon({ children }: {
    children: React.ReactNode,
}) {

    const onPress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    }

    return (
        <Pressable onPress={onPress}>
            {children}
        </Pressable>
    )
}