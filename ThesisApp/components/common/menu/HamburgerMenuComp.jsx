import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { COLORS, icons, images, SIZES } from '../../../constants';
import styles from '../../../assets/styles';

const HamburgerMenuComp = () => {
    return (
        <View style={ styles.tabsContainer }>
            <TouchableOpacity style={ styles.tabsBtn }>
                <Text style={ styles.bodyTextBold }>
                    Devices
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={ styles.tabsBtn }>
                <Text style={ styles.bodyTextBold }>
                    History
                </Text>
            </TouchableOpacity>
        </View>
        // <TouchableOpacity>
        //     <View>
        //         <Text> Putang ina mo</Text>
        //     </View>
        // </TouchableOpacity>
    )
}

export default HamburgerMenuComp;