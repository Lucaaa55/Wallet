import { StatusBar, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
    return (
        <>
            <StatusBar barStyle={'default'} />

            <SafeAreaView style={styles.container}>
                <Text>Quiz</Text>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})