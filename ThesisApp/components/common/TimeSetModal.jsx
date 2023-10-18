import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";

import styles from "../../assets/styles";

const TimeSetModal = () => {
    console.log('Time Set Modal');

    return (
        <View style={ styles.commonModalContainer }>
            <Text style={ styles.bodyText }> TEST MODAL </Text>
        </View>
    )
}

export default TimeSetModal;