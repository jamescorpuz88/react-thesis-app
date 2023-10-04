import { Stack, useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import styles from '../assets/styles';
import { COLORS, SIZES } from '../assets/theme';
import { SafeAreaView, View, Text } from 'react-native';

import { Home, Devices, HamburgerMenuBtn } from '../components'

const Drawer = createDrawerNavigator();

const App = () => {
    console.log('TEST');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkgrey }}>
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
                        name="FirstPage"
                        options={{ drawerLabel: 'Home' }}
                        component={Home} />
                    <Drawer.Screen
                        name="SecondPage"
                        options={{ drawerLabel: 'Devices' }}
                        component={Devices} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;