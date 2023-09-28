import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../assets/theme';
import common from '../components/common';
import styles from '../assets/styles';

// TEST DEVICE
import testDevices from '../components/testDevices';

import { DeviceComponent, HamburgerMenuBtn, HamburgerMenuComp } from '../components';

const Home = () => {
    const router = useRouter();
    const navMenuItems = common.navMenuItems;
    const testDevice = testDevices.devices;

    console.log(navMenuItems)
    console.log(testDevice)

    return (    // SafeAreaView : Show content safely without notches, homebutton appearing
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkgrey }}>  
            <Stack.Screen
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
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    <View>
                        <FlatList
                            data={navMenuItems}
                            renderItem={({ item }) => (
                                <HamburgerMenuComp
                                    item={item}
                                />
                            )}
                        />
                    </View>
                    <View>
                        <Text>
                            My Devices
                        </Text>
                        <FlatList
                            data={testDevice}
                            renderItem={({ item }) => (
                                <DeviceComponent
                                    item={ item }
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;