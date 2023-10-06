import { useState } from "react";
import { View, FlatList, Pressable, Text, SafeAreaView, ScrollView, Button } from "react-native";
import Modal from "react-native-modal";

import styles from "../assets/styles";

import common from '../components/common';

import ContentComp from "./common/ContentComp";
import HamburgerMenuComp from "./common/HamburgerMenuComp";
import ConnectedComp from "./common/ConnectedComp";
import TimeSetModal from "./common/TimeSetModal";

const Home = () => {
    const [timeModalVisible, setTimeModalVisible] = useState(false);
    const [connected, setConnected] = useState()

    const navMenuItems = common.navMenuItems;

    const handleTimeModal = () => {
        setTimeModalVisible(!timeModalVisible);
    }

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

            <Button
                title="SHOW MODAL"
                onPress={() => handleTimeModal()}
            />
            <Modal
                animationType="slide" transparent={true}
                visible={timeModalVisible}
                onRequestClose={() => { handleTimeModal() }}
                onBackdropPress={() => { handleTimeModal() }}
            >
                <View style={{ backgroundColor: "#FFF"}}>
                    <TimeSetModal/>
                    <Pressable onPress={() => handleTimeModal()}>
                        <Text>Hide Modal</Text>
                    </Pressable>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Home;