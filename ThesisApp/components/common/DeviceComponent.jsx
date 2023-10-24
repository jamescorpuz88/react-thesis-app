import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import styles from "../../assets/styles";
import icons from "../../assets/icons";
import { FlatList } from "react-native";

const DeviceComponent = ({ item, key, handlePress }) => {
    let properties = Object.values(item.properties[0]);

    return (
        <View>
            <View style={styles.deviceContainer}>
                <View style={styles.deviceIconContainer}>
                    <TouchableOpacity style={styles.deviceButton}>
                        <Image
                            source={icons[item.icon]}
                            style={styles.deviceImage}
                        />
                        <Text style={ styles.deviceText }>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.deviceViewContainer} showsVerticalScrollIndicator={false} horizontal>
                    <FlatList
                        data={properties}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity 
                                    style={ styles.deviceButton }
                                    onPress={() => handlePress(index, key)}
                                >
                                    <Image source={icons.apple} style={styles.deviceImage}/>
                                    <Text style={styles.deviceText}> {item} </Text>
                                </TouchableOpacity>
                            )
                        }}
                        horizontal
                    />
                </ScrollView>
            </View>
        </View>
    )
}

export default DeviceComponent;