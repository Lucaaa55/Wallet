import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import { ChevronRight, Clipboard as ClipboardIcon, LogOut } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { menuItems } from '$/extra/menu'
import { StatusBar } from 'expo-status-bar'
import * as Haptics from 'expo-haptics'
import * as Clipboard from 'expo-clipboard'
import ToastManager, { Toast } from 'toastify-react-native'

const toastConfig = {
    success: (props: any) => (
        <View style={{ backgroundColor: '#4CAF50', padding: 16, borderRadius: 10, marginTop: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.text1}</Text>
            {props.text2 && <Text style={{ color: 'white' }}>{props.text2}</Text>}
        </View>
    ),
}

export default function Page() {
    const router = useRouter()

    const Copy = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        Clipboard.setStringAsync('@Cuentalucarda')
        Toast.success('Copiado')
    }

    const Logout = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        router.push('/(auth)/login')
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar style={'auto'} />

            <SafeAreaView edges={['left', 'right', 'top']} style={[styles.container]}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                    <View style={styles.header}>
                        <Text style={styles.name}>Luca Pignataro</Text>
                        <View style={styles.usernameContainer}>
                            <TouchableOpacity onPress={Copy} style={styles.copyButton}>
                                <Text style={styles.username}>@Cuentalucarda</Text>
                                <ClipboardIcon size={16} color={colors.blue} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {menuItems.map((menu, index) => (
                        <View key={index} style={styles.menu}>
                            <Text style={styles.menuTitle}>{menu.section}</Text>
                            <View style={styles.card}>
                                {menu.items.map((item, index) => (
                                    <TouchableOpacity activeOpacity={0.7} key={index} style={styles.menuItem}>
                                        <View style={styles.menuItemLeft}>
                                            <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                                                <item.icon size={20} color={item.color} />
                                            </View>
                                            <Text style={styles.menuItemLabel}>{item.label}</Text>
                                        </View>
                                        <ChevronRight size={20} color={'#9ca3af'} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ))}

                    <TouchableOpacity onPress={Logout} activeOpacity={0.7} style={styles.logoutButton}>
                        <LogOut size={20} color={colors.red} />
                        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </ScrollView>

                <ToastManager config={toastConfig} />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back,
    },
    scrollView: {
        // flex: 1,
    },
    header: {
        padding: '7%',
        paddingTop: '5%',
        paddingBottom: '0%',
    },
    name: {
        fontSize: 28,
        fontWeight: '600',
        color: colors.dark,
        marginBottom: 8,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    username: {
        fontSize: 16,
        color: colors.blue,
        fontWeight: '500',
    },
    copyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: '5%',
        padding: 4,
    },
    menu: {
        marginTop: '5%',
        paddingHorizontal: '2.5%',
        marginHorizontal: '5%',
        backgroundColor: colors.white,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.border,
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.sectionTitle,
        marginBottom: '3%',
        marginTop: '7%',
        marginLeft: '5%',
    },
    card: {},
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5%',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItemLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.dark,
    },
    logoutButton: {
        padding: '7%',
        marginHorizontal: '5%',
        flexDirection: 'row',
        gap: '5%',
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.red,
    },
})