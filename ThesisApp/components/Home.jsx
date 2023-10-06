import { useState } from "react";
import { Alert, Modal, View, FlatList, Pressable, StyleSheet, Text, SafeAreaView, ScrollView, Button } from "react-native";

import icons from "../assets/icons";
import styles from "../assets/styles";
import { COLORS } from "../assets/theme";

import common from '../components/common';

import ContentComp from "./common/ContentComp";
import HamburgerMenuComp from "./common/HamburgerMenuComp";
import ConnectedComp from "./common/ConnectedComp";
import TimeSetModal from "./common/TimeSetModal";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
    const [timeModalVisible, setTimeModalVisible] = useState(false);
    const [connected, setConnected] = useState()
    const navMenuItems = common.navMenuItems;

    console.log(timeModalVisible);

    handleTimeModal = () => {
        setTimeModalVisible(!timeModalVisible)
        console.log(timeModalVisible);
    };

    return (
        <SafeAreaView style={ styles.commonView }>
            <ConnectedComp status={ "Disconnected" }/>
            <ContentComp contentImage={ "powerplant" }/>
            <ScrollView style={ styles.commonContainer }>
                <FlatList
                    data={navMenuItems}
                    renderItem={({ item }) => (
                        <HamburgerMenuComp item={ item }/>
                    )}
                />
            </ScrollView>

            <Button title='Show Modal' onPress={handleTimeModal}/>
            <Modal
                animationType="slide"
                transparent={true}
                isVisible={timeModalVisible}
                onRequestClose={() => {
                    console.log('CLOSE MODAL!')
                    this.timeModalVisible;
                }}
            >
                <TimeSetModal/>
                <Button title="CloseModal" onPress={handleTimeModal}/>
            </Modal>
        </SafeAreaView>
    )
}

export default Home;