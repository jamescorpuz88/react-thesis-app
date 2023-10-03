import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from '../../assets/styles'
import { icons } from '../../constants'

import common from '../common'

const HamburgerMenuBtn = ({ dimension, handlePress }) => {
    return (
        <TouchableOpacity style={ styles.btnContainer } onPress={ handlePress }>
            <Image
                source={ icons.menu }
                resizeMode='cover'
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default HamburgerMenuBtn;