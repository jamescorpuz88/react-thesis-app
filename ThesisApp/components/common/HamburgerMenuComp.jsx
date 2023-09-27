import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { COLORS, SIZES, FONT } from '../../assets/theme';
import styles from '../../assets/styles';
import icons from '../../assets/icons';

import common from '../common';
import { FlatList } from 'react-native-gesture-handler';

const HamburgerMenuComp = ({ item }) => {
    console.log(item); // Should now log the item object correctly
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