import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { Modal } from "react-native-web"

import styles from "../../assets/styles"

import ModalTimeSet from "./ModalTimeSet"
import ModalPower from "./ModalPower"

const ModalController = ({ isModalVisible, handleModal, modalType }) => {
    const [modalTitle, setModalTitle] = useState();

    useEffect(() => {
        if(modalType === 'TimeModal')
            setModalTitle('Set Time');
        if(modalType === 'PowerModal')
            setModalTitle('Power')
    }, [modalType])

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={handleModal}
            onBackdropPress={handleModal}
        >
            <TouchableWithoutFeedback style={styles.commonModalOverlay} onPress={handleModal}>
                <View style={styles.commonModalOverlay} />
            </TouchableWithoutFeedback>
            <View style={styles.commonModal}>
                <View style={styles.commonModalHeader}>
                    <Text style={styles.headerText}> {modalTitle} </Text>
                    <TouchableOpacity onPress={handleModal}><Text style={styles.headerText}> x </Text></TouchableOpacity>
                </View>
                { 
                    modalType === 'TimeModal' ? <ModalTimeSet/> :
                    modalType === 'PowerModal' ? <ModalPower/> : 
                    <p> Test </p> 
                }
            </View>
        </Modal>
    )
}

export default ModalController