import { Text, View, SafeAreaView } from "react-native-web";
import { FlatList } from 'react-native-gesture-handler';

import styles from "../assets/styles";
import { COLORS } from "../assets/theme";

import common from '../components/common';

import HamburgerMenuComp from "./common/HamburgerMenuComp";

const Home = () => {
    const navMenuItems = common.navMenuItems;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkgrey }}>
            {/* <View>
                <FlatList
                    data={navMenuItems}
                    renderItem={({ item }) => (
                        <HamburgerMenuComp item={ item } />
                    )}
                />
            </View> */}
            <Text> HOME </Text>
        </SafeAreaView>
    )
}

export default Home;