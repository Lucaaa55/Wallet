import { Briefcase, FileText, Percent, Sliders, TrendingUp, User, Users } from 'lucide-react-native'
import { colors } from './colors'

export const menuItems = [
    {
        section: 'Datos y configuración',
        items: [
            { icon: User, label: 'Datos personales', color: colors.yellow },
            { icon: Sliders, label: 'Límites', color: colors.yellow },
            { icon: Percent, label: 'Comisiones', color: colors.yellow },
            { icon: TrendingUp, label: 'Rendimiento de balance', color: colors.yellow },
        ]
    },
    {
        section: 'Trabajo',
        items: [
            { icon: Briefcase, label: 'Mi trabajo', color: colors.yellow },
            { icon: FileText, label: 'Generador de facturas', color: colors.yellow },
        ]
    },
    {
        section: 'Destinatarios y cuentas',
        items: [
            { icon: Users, label: 'Destinatarios', color: colors.yellow },
        ]
    }
]