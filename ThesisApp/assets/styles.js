import { StyleSheet } from "react-native";
import { COLORS , SIZES, FONT } from "./theme";

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
        borderRadius: SIZES.small / 1.25,
    },
    tabsBtn: {
        width: "100%",
        margin: 5,
        borderRadius: SIZES.small / 1.25,
        backgroundColor: COLORS.grey
    },
    headerText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xlarge,
        color: COLORS.white,
        margin: 10
    },
    bodyText: {
        color: COLORS.white,
        margin: 10
    },
    bodyTextBold: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        margin: 10
    }
})

export default styles