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
        width: "99%",
        margin: 5,
        borderRadius: SIZES.small / 1.25,
        backgroundColor: COLORS.grey,
        flexDirection: "row"
    },
    tabsBtnView: {
        margin: 10,
    },
    headerText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xlarge,
        color: COLORS.white,
        marginLeft: 10
    },
    bodyText: {
        fontSize: SIZES.small,
        color: COLORS.white,
        marginLeft: 10
    },
    bodyTextBold: {
        fontFamily: FONT.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginLeft: 10
    }
})

export default styles