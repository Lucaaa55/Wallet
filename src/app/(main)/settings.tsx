import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react'
import { colors } from '$/extra/colors'
import { useRouter } from 'expo-router'
import { ChevronRight, Clipboard } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { menuItems } from '$/extra/menu'
import { StatusBar } from 'expo-status-bar'

export default function Page() {
    const router = useRouter()

    useEffect(() => {

    }, [])

    return (
        <>
            <StatusBar style={'auto'} />

            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.name}>Luca Pignataro</Text>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>@Cuentalucarda</Text>
                            <TouchableOpacity style={styles.copyButton}>
                                <Clipboard size={16} color={colors.violeta} />
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
                </ScrollView>
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
        flex: 1,
    },
    content: {
        paddingBottom: 25,
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
        color: colors.violeta,
        fontWeight: '500',
    },
    copyButton: {
        padding: 4,
    },
    menu: {
        marginTop: 24,
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
        marginBottom: 12,
        marginTop: 22,
        marginLeft: 16,
    },
    card: {},
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
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
})