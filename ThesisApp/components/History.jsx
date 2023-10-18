import React from "react";
import { FlatList, View, Text, SafeAreaView, ScrollView } from "react-native";

import styles from "../assets/styles";

const History = () => {

    return (
        <SafeAreaView style={ styles.commonView }>
            <Text style={ styles.headerText }>
                History page
            </Text>
        </SafeAreaView>
    )
}

export default History;