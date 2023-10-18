import { Stack, useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import styles from '../assets/styles';
import { COLORS, SIZES } from '../assets/theme';
import { SafeAreaView, View, Text } from 'react-native';

import { Home, Devices, History } from '../components'

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Stack.Screen options={{ headerShown: false }} />
            <NavigationContainer independent={true}>
                <Drawer.Navigator
                    drawerContent={(props) => {
                        //#region drawerContent
                        return (
                            // navProfile
                            <SafeAreaView>
                                <View style={ styles.navProfile } >
                                    <Text> TEST </Text>
                                </View>
                                <DrawerItemList {...props} />
                            </SafeAreaView>
                        )
                        //#endregion
                    }}
                    screenOptions={ styles.drawStyle }
                >
                    <Drawer.Screen
                        name="Home"
                        options={{ drawerLabel: 'Home' }}
                        component={Home} />
                    <Drawer.Screen
                        name="Devices"
                        options={{ drawerLabel: 'Devices' }}
                        component={Devices} />
                    <Drawer.Screen
                        name="History"
                        options={{ drawerLabel: 'History' }}
                        component={History} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;