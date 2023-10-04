import { StyleSheet } from "react-native";
import { COLORS , SIZES, FONT } from "./theme";

const styles = StyleSheet.create({
    // Navigation Menu
    navProfile: {
        height: 250,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.darkgrey,
        opacity: 1,
    },

    drawStyle: {
        drawerStyle: {
            backgroundColor: COLORS.darkgrey,
            width: 300
        },
        headerStyle: {
            backgroundColor: "#f4511e"
        },
        headerTintColor: "fff",
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        drawerActiveTintColor: COLORS.white,
        drawerLabelStyle: {
            color: COLORS.white
        }
    },

    // Common Items
    commonContainer: {
        flex: 1, 
        padding: SIZES.medium,
        backgroundColor: COLORS.darkgrey
    },
    commonView: {
        flex: 1,
        backgroundColor: COLORS.darkgrey
    },

    // Component
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
        fontSize: SIZES.xLarge,
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
    },
    deviceContainer: {
        flexDirection: "row",
    },
    deviceIconContainer: {
        backgroundColor: COLORS.grey,
        borderRadius: SIZES.small / 1.25,
        marginTop: 5,
        marginBottom: 5,
    },
    deviceViewContainer: {
        backgroundColor: COLORS.grey,
        borderRadius: SIZES.small / 1.25,
        marginLeft: 10,
        margin: 5
    },
    deviceButton: {
        alignItems: "center"
    },
    deviceImage: {
        margin: 5
    },
    deviceText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.regular,
        color: COLORS.white,
        marginBottom: 10
    }
})

export default styles;