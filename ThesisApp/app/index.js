import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../assets/theme';
import styles from '../assets/styles';

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import HamburgerMenuBtn from '../components/common/HamburgerMenuBtn';
import HamburgerMenuComp from '../components/common/HamburgerMenuComp';
import { FlatList } from 'react-native-gesture-handler';
import common from '../components/common';


const  Home = () => {
    const router = useRouter();
    const navMenuItems = common.navMenuItems;

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
                        <Welcome
                        
                        />
                        <Nearbyjobs/>
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;