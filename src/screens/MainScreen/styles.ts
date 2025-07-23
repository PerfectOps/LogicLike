import { StyleSheet } from "react-native-unistyles";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.background,
        flex: 1,
    },
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 38
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        paddingHorizontal: 24,
        gap: 18,
    },
})