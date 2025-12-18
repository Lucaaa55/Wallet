import { Briefcase, FileText, Fingerprint, IdCard, Percent, ShieldCheck, Sliders, TrendingUp, User, Users } from 'lucide-react-native'
import { colors } from './colors'

export const menuItems = [
    {
        section: 'Datos y configuración',
        items: [
            { icon: User, label: 'Datos personales', color: colors.blue },
            { icon: Sliders, label: 'Límites', color: colors.blue },
            { icon: Percent, label: 'Comisiones', color: colors.blue },
            { icon: TrendingUp, label: 'Rendimiento de balance', color: colors.blue },
        ]
    },
    {
        section: 'Trabajo',
        items: [
            { icon: Briefcase, label: 'Mi trabajo', color: colors.blue },
            { icon: FileText, label: 'Generador de facturas', color: colors.blue },
        ]
    },
    {
        section: 'Destinatarios y cuentas',
        items: [
            { icon: Users, label: 'Destinatarios', color: colors.blue },
            { icon: IdCard, label: 'Datos bancarios EUR', color: colors.blue },
        ]
    },
    {
        section: 'Seguridad',
        items: [
            { icon: ShieldCheck, label: 'Autenticación 2FA', color: colors.blue },
            { icon: Fingerprint, label: 'Biometría', color: colors.blue },
        ]
    }
]