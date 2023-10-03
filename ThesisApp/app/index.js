import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../assets/theme';
import common from '../components/common';
import styles from '../assets/styles';

import { DeviceComponent, HamburgerMenuBtn, HamburgerMenuComp, DevicesScreen } from '../components';

// TEST DEVICE
import testDevices from '../components/testDevices';

// START IN DEV
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
// END IN DEV

const Home = () => {
    const router = useRouter();
    const navMenuItems = common.navMenuItems;
    const testDevice = testDevices.devices;

    console.log(navMenuItems)
    console.log(testDevice)
    //#region

    return (    // SafeAreaView : Show content safely without notches, homebutton appearing
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkgrey }}>  
            <Drawer.Navigator>
                <Drawer.Screen name="Feed" component={ DevicesScreen } />
                <Drawer.Screen name="Article" component={ DevicesScreen } />
            </Drawer.Navigator>
            
            {/* <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.darkgrey },
                    headerLeft: () => (
                        <HamburgerMenuBtn dimension="100%" />
                    ),
                    headerTitleStyle: styles.headerText,
                    headerTitle: "Thesis Application"
                }}
            />
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <View>
                        <FlatList
                            data={navMenuItems}
                            renderItem={({ item }) => (
                                <HamburgerMenuComp item={ item } />
                            )}
                        />
                    </View>
                    <View>
                        <Text> My Devices </Text>
                        <FlatList 
                            data={testDevice}
                            renderItem={({ item }) => (
                                <DeviceComponent item={ item } />
                            )}
                        />
                    </View>
                </View>
            </ScrollView> */}
        </SafeAreaView>
    )
    //#endregion
}

export default Home;