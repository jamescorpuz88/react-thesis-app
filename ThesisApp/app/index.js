import { useRouter } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import { COLORS, SIZES } from '../assets/theme';
import { SafeAreaView, View, Text } from 'react-native';

import { Home, Devices } from '../components'

const Drawer = createDrawerNavigator();

const App = () => {
    console.log('TEST');

    return (
        // <SafeAreaView>
        //     <NavigationContainer independent={true}>
        //         <Drawer.Navigator
        //             screenOptions={{
        //                 drawerStyle: {
        //                     backgroundColor: "#fff",
        //                     width: 250
        //                 },
        //                 headerStyle: {
        //                     backgroundColor: "#f4511e"
        //                 },
        //                 headerTintColor: "fff",
        //                 headerTitleStyle: {
        //                     fontWeight: 'bold'
        //                 },
        //                 drawerActiveTintColor: "blue",
        //                 drawerLabelStyle: {
        //                     color: "#111"
        //                 }
        //             }}
        //         >
        //             <Drawer.Screen 
        //                 name="Home"
        //                 options={{
        //                     drawerLabel: "Home",
        //                     title: "Home",
        //                     // drawerIcon: () => (
                                
        //                     // )
        //                 }}
        //                 component={Home}
        //             />
        //         </Drawer.Navigator>
        //     </NavigationContainer>
        // </SafeAreaView>
        //#region old Region
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.darkgrey }}>
            <NavigationContainer independent={true}>
                <Drawer.Navigator
                    drawerContent={(props) => {
                        //#region drawerContent
                        return (
                            <SafeAreaView>
                                <View
                                    style={{
                                        height: 200,
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'blue',
                                        opacity: 1,
                                    }}
                                >
                                    <Text> TEST </Text>
                                </View>
                                <DrawerItemList {...props}/>
                            </SafeAreaView>
                        )
                        //#endregion
                    }}
                    screenOptions={{
                        //#region screenOptions
                        drawerStyle: {
                            backgroundColor: "#fff",
                            width: 250
                        },
                        headerStyle: {
                            backgroundColor: "#f4511e"
                        },
                        headerTintColor: "fff",
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                        drawerActiveTintColor: "blue",
                        drawerLabelStyle: {
                            color: "#111"
                        }
                        //#endregion
                    }}
                >
                    <Drawer.Screen
                        name="FirstPage"
                        options={{ drawerLabel: 'First page Option' }}
                        component={Home} />
                    <Drawer.Screen
                        name="SecondPage"
                        options={{ drawerLabel: 'Second page Option' }}
                        component={Devices} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        //endregion
    )
}

export default App;