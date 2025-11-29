import { router } from 'expo-router'
import * as Haptics from 'expo-haptics'

export const events = {
    Scan: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        router.push('/(ext)/scan')
    },
    Links: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        router.push('/(ext)/links')
    },
    Datos: () => {
        Haptics.selectionAsync()
        router.push('/(ext)/datos')
    },
    Transaction: (transactionId: string) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        router.push(`/(ext)/${transactionId}`)
    },
    Ingresar: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push('/(ext)/movements/ingresar')
    },
    Retirar: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push('/(ext)/movements/retirar')
    },
}