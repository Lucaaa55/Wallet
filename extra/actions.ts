import { router } from "expo-router"
import { ArrowDownLeft, ArrowUpRight, Plus } from "lucide-react-native"

export const actions = [
    {
        icon: ArrowDownLeft,
        text: 'Ingresar',
        onPress: () => {
            router.push('/(ext)/movements/ingresar')
        },
    },
    {
        icon: ArrowUpRight,
        text: 'Retirar',
        onPress: () => {
            router.push('/(ext)/movements/retirar')
        },
    },
    {
        icon: Plus,
        text: 'Mas',
        onPress: () => {
            router.push('/(ext)/more')
        },
    },
]