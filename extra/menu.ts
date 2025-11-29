import { Briefcase, FileText, Percent, Sliders, TrendingUp, User, Users } from 'lucide-react-native'

export const menuItems = [
    {
        section: 'Datos y configuración',
        items: [
            { icon: User, label: 'Datos personales', color: '#7c3aed' },
            { icon: Sliders, label: 'Límites', color: '#7c3aed' },
            { icon: Percent, label: 'Comisiones', color: '#7c3aed' },
            { icon: TrendingUp, label: 'Rendimiento de balance', color: '#7c3aed' },
        ]
    },
    {
        section: 'Trabajo',
        items: [
            { icon: Briefcase, label: 'Mi trabajo', color: '#7c3aed' },
            { icon: FileText, label: 'Generador de facturas', color: '#7c3aed' },
        ]
    },
    {
        section: 'Destinatarios y cuentas',
        items: [
            { icon: Users, label: 'Destinatarios', color: '#7c3aed' },
        ]
    }
]