import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../../assets/styles";
import icons from "../../assets/icons";

const ContentComp = ( props ) => {

    return (
        <View style={ styles.contentCompView }>
            <Text> TEST </Text>
            <Image 
                source={ icons[props.contentImage] }
                resizeMode='cover'
                style={ styles.contentCompImage }
            />
        </View>
    )
}

export default ContentComp;