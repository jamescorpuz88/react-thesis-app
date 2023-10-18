import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from '../../assets/styles';
import icons from '../../assets/icons';

const HamburgerMenuComp = ({ item }) => {
    return (
        <TouchableOpacity style={ styles.tabsBtn } horizontal>
            <Image
                source={ icons[item.icon] }
            />
            <View style={ styles.tabsBtnView }>
                <Text style={ styles.bodyTextBold } >
                    { item.title }
                </Text>
                <Text style={ styles.bodyText } >
                    { item.subtitle }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default HamburgerMenuComp;