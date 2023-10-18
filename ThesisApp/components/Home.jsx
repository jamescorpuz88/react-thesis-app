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
    const [connected, setConnected] = useState()
    const navMenuItems = common.navMenuItems;

    const isTimeModal = false;

    const [timeModalVisible, setTimeModalVisible] = useState(false);
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

            {/* <Button title='Show Modal' onPress={handleTimeModal}/> */}
            <Button
                title="SHOW MODAL"
                onPress={() => handleTimeModal()}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={timeModalVisible}
                onRequestClose={() => { handleTimeModal() }}
                onBackdropPress={() => { handleTimeModal() }}
            >
                <View style={ styles.commonModal }>
                    <Button title="Hide Modal" onPress={() => handleTimeModal()} />
                    <TimeSetModal/> 
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Home;