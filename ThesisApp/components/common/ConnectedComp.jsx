import { Text, View, SafeAreaView } from "react-native";
import styles from "../../assets/styles";

const ConnectedComp = ( props ) => {
    let statusColor = "";
    props.status == "Connected" ? statusColor = "#00FF00" : statusColor = "#FF0000";

    return (
        <SafeAreaView style={{ alignItems: "center", margin: 10 }}>
            <View style={ styles.commonStatus }>
                <Text style={ styles.commonStatusIcon(statusColor) }> 
                    ● 
                </Text>
                <Text style={ styles.commonStatusText }> 
                    { props.status } 
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default ConnectedComp;