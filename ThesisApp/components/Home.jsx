import { FlatList, Text, View, SafeAreaView } from "react-native";

import styles from "../assets/styles";
import { COLORS } from "../assets/theme";

import common from '../components/common';

import HamburgerMenuComp from "./common/HamburgerMenuComp";

const Home = () => {
    const navMenuItems = common.navMenuItems;

    return (
        <SafeAreaView style={ styles.commonView }>
            <View>
                <FlatList
                    data={navMenuItems}
                    renderItem={({ item }) => (
                        <HamburgerMenuComp item={ item } />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home;