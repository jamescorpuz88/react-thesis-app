import { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, SafeAreaView, ScrollView, Button } from "react-native";
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

    const [isModalVisible, setModalVisible] = useState(false);
    const handleTimeModal = () => {
        setModalVisible(!isModalVisible);
    }

    const handleConnect = () => {
        connected == 'Connected' ? setConnected('Disconncted') : setConnected('Connected')
    }

    return (
        <SafeAreaView style={ styles.commonView }>
            <ConnectedComp status={ connected }/>
            <ContentComp contentImage={ "powerplant" }/>

            <TouchableOpacity style={ styles.tabsBtn } onPress={ handleConnect }>
                <View style={ styles.tabsBtnView }>
                    <Text style={ styles.headerText } >
                        'Dis/connect'
                    </Text>
                </View>
            </TouchableOpacity>
            
            <ScrollView style={ styles.commonContainer }>
                <FlatList
                    data={navMenuItems}
                    renderItem={({ item }) => (
                        <HamburgerMenuComp item={ item }/>
                    )}
                />
            </ScrollView>

            <Button title="SHOW MODAL" onPress={() => handleTimeModal()} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => { handleTimeModal() }}
                onBackdropPress={() => { handleTimeModal() }}
            >
                <View style={ styles.commonModal }>
                    <Button title="Hide Modal" onPress={() => handleTimeModal()} />
                    { isModalVisible ? <TimeSetModal/> : 'Test' }
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Home;