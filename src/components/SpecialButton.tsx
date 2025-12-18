import { StyleSheet, TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics'
import { ScanQrCode } from "lucide-react-native";
import { colors } from "$/extra/colors";
import { router } from "expo-router";

export function SpecialButton() {
    const Press = async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push('/(main)/scan')
    }

    return (
        <TouchableOpacity onPress={Press} activeOpacity={1} style={styles.button}>
            <ScanQrCode size={25} color={colors.white} strokeWidth={1.6} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 75,
        height: 75,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
    },
})