import { useState } from "react";
import { FlatList, Text, SafeAreaView, ScrollView } from "react-native";

import styles from "../assets/styles";

import ModalController from "./common/ModalController";
import DeviceComponent from "./common/DeviceComponent";
import testDevices from '../hook/testDevices';

const Devices = () => {
    const [device, updateDevice] = useState(testDevices.devices)
    const [isModalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');

    const handlePress = (property, index) => {
        const deviceUpdate = [...device];
        let tempProperty = { ...deviceUpdate[index].properties[0] };

        if(property === 0)      // Set Power State
            tempProperty.power = tempProperty.power === 'On' ? 'Off' : 'On';

        if(property === 1) {    // Open Time Modal
            setModalType('TimeModal');
            handleModal();
        }

        if(property === 2) {
            setModalType('PowerModal');
            handleModal();
        }
            

        deviceUpdate[index].properties[0] = tempProperty;

        // ADD USEFETCH HOOK TO UPDATE DATABASE HERE

        return updateDevice(deviceUpdate);
    }

    const handleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return (
        <SafeAreaView style={styles.commonView}>
            <ScrollView style={styles.commonContainer}>
                <Text style={styles.headerText}> Devices </Text>
                <FlatList 
                    data={device} 
                    renderItem={({ item, index }) => (
                        <DeviceComponent 
                            item={item} index={index}
                            handlePress={(property) => handlePress(property, index)}
                        />
                    )}
                />
            </ScrollView>
            <ModalController
                isModalVisible={isModalVisible}
                handleModal={handleModal}
                modalType={modalType}
            />
        </SafeAreaView>
    )
}

export default Devices;