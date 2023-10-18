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
    const [connected, setConnected] = useState('Connected')
    const navMenuItems = common.navMenuItems;

    const [modalVisible, setModalVisible] = useState(false);
    const handleTimeModal = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <SafeAreaView style={ styles.commonView }>
            <ConnectedComp status={ connected }/>
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
            <Button title="SHOW MODAL" onPress={() => handleTimeModal()} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { handleTimeModal() }}
                onBackdropPress={() => { handleTimeModal() }}
            >
                {{ if(modalVisible) {
                    <View style={ styles.commonModal }>
                        <Button title="Hide Modal" onPress={() => handleTimeModal()} />
                        <TimeSetModal/> 
                    </View>
                }}}
            </Modal>
        </SafeAreaView>
    )
}

export default Home;