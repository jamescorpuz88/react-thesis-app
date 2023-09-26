import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native'

import styles from '../../../assets/styles'

//                         These are props passed on from the declaration of the component; index.js
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={iconUrl}
                resizeMode='cover'
                style={styles.btnImg(dimension)}
            />
        </TouchableOpacity>
    )
}

export default ScreenHeaderBtn