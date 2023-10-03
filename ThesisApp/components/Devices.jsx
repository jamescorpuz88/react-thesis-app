import React from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";

import styles from "../assets/styles";

import DeviceComponent from "./common/DeviceComponent";
import testDevices from '../hook/testDevices';

const Devices = () => {
    const testDevice = testDevices.devices;

    console.log(testDevice)

    return (
        <SafeAreaView style={ styles.commonView }>
            <View style={ styles.commonContainer }>
                <Text style={ styles.headerText }> My Devices </Text>
                <FlatList 
                    data={testDevice}
                    renderItem={({ item }) => (
                        <DeviceComponent item={ item } />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Devices;