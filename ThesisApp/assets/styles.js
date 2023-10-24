import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { COLORS , SIZES, FONT } from "./theme";

const radius = SIZES.small / 2.5;

const styles = StyleSheet.create({
    // Navigation Menu
    navProfile: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.darkgrey,
        opacity: 1,
    },
    drawStyle: {
        drawerStyle: { backgroundColor: COLORS.darkgrey, width: 300 },
        headerStyle: { backgroundColor: COLORS.black, height: 75 },
        headerTintColor: "fff",
        headerTitleStyle: { fontWeight: 'bold', color: COLORS.white },
        drawerActiveTintColor: COLORS.white, drawerLabelStyle: { color: COLORS.white }
    },

    // Common Items
    commonContainer: {
        flex: 1, 
        padding: SIZES.medium,
        backgroundColor: COLORS.black
    },
    commonView: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    commonStatus: {
        flexDirection: "row",
        alignItems: "center"
    },
    commonStatusIcon: (status) => ({
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: status,
    }),
    commonStatusText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.regular,
        color: COLORS.white,
        marginLeft: 5
    },

    // Component
    btnContainer: {
        width: 40,
        height: 40,
        borderRadius: radius,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: radius,
    }),
    tabsContainer: {
        width: "100%",
        marginTop: SIZES.medium,
        borderRadius: radius,
    },
    tabsBtn: {
        width: "99%",
        margin: 5,
        borderRadius: radius,
        backgroundColor: COLORS.darkgrey,
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
        backgroundColor: COLORS.darkgrey,
        borderRadius: radius,
        marginTop: 5,
        marginBottom: 5,
    },
    deviceViewContainer: {
        backgroundColor: COLORS.darkgrey,
        borderRadius: radius,
        marginLeft: 10,
        margin: 5
    },
    deviceButton: {
        alignItems: "center"
    },
    deviceImage: {
        margin: 5,
        width: 60,
        height: 60
    },
    deviceText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.regular,
        color: COLORS.white,
        marginBottom: 10
    },

    // Content Comp
    contentCompView: {
        backgroundColor: COLORS.black,
        borderRadius: radius,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
    },
    contentCompImage: {
        margin: 20,
        width: 150,
        height: 150
    },

    // Modal Comp
    commonModalOverlay: {
        position: "absolute",
        width: '100%',
        height: '100%',
    },
    commonModal: {
        width: '90%',
        height: 250,

        alignSelf: 'center',
        marginTop: 'auto',

        backgroundColor: COLORS.darkgrey,
        borderRadius: radius,
        elevation: 5
    },
    commonModalHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        margin: 10,
    },
    commonModalContainer: {
        margin: 10
    }
})

export default styles;