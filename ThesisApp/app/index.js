import { useState } from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, SIZES } from '../assets/theme';
import styles from '../assets/styles';

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import HamburgerMenuBtn from '../components/common/header/HamburgerMenuBtn';
import HamburgerMenuComp from '../components/common/menu/HamburgerMenuComp';


const  Home = () => {
    const router = useRouter();

    return (    // SafeAreaView : Show content safely without notches, homebutton appearing
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkgrey }}>  
            {/* <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: "TST"
                }}
            /> */}
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
                        <HamburgerMenuComp/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;