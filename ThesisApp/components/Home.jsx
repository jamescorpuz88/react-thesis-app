import { useState } from "react";
import { FlatList, Button, Text, SafeAreaView, ScrollView } from "react-native";

import styles from "../assets/styles";
import { COLORS } from "../assets/theme";

import common from '../components/common';

import HamburgerMenuComp from "./common/HamburgerMenuComp";
import BottomDrawer from "./common/BottomDrawer";

const Home = () => {
    const [show, setShow] = useState(true)
    const navMenuItems = common.navMenuItems;

    return (
        <SafeAreaView style={ styles.commonView }>
            <Button onPress={() => setShow(true)} title="Show Bottom Drawer">
            <BottomDrawer/>
            </Button>
            <ScrollView style={ styles.commonContainer }>
                <FlatList
                    data={navMenuItems}
                    renderItem={({ item }) => (
                        <HamburgerMenuComp item={ item } />
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;