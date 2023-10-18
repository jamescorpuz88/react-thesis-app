import React from "react";
import { FlatList, View, Text, SafeAreaView, ScrollView } from "react-native";

import styles from "../assets/styles";

import DeviceComponent from "./common/DeviceComponent";
import testDevices from '../hook/testDevices';

const Devices = () => {
    const device = testDevices.devices;

    return (
        <SafeAreaView style={ styles.commonView }>
            <ScrollView style={ styles.commonContainer }>
                <Text style={ styles.headerText }> Devices </Text>
                <FlatList 
                    data={ device }
                    renderItem={({ item }) => (
                        <DeviceComponent item={ item } />
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Devices;