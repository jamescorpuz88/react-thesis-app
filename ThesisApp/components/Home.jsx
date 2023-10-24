import { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, SafeAreaView, ScrollView, Button } from "react-native";
import Modal from "react-native-modal";

import styles from "../assets/styles";

import common from '../components/common';

import ContentComp from "./common/ContentComp";
import ConnectedComp from "./common/ConnectedComp";
import HamburgerMenuComp from "./common/HamburgerMenuComp";
import useFetch from "../hook/useFetch";

const Home = () => {
    const [connected, setConnected] = useState('Connected')
    const navMenuItems = common.navMenuItems;

    const handleConnect = () => {
        connected == 'Connected' ? setConnected('Disconnected') : setConnected('Connected')
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
        </SafeAreaView>
    )
}

export default Home;