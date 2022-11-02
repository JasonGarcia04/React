import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import HomeScreen from "../screens/HomeScreen";
import Settings from "../screens/Settings";
import Socials from "../screens/News";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    right: 20,
                    left: 20,
                    ...styles.shadow
                }

            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{

                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                        <Image source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}

                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>HOME</Text>
                    </View>
                ),

            }} />
            <Tab.Screen name="Socials" component={Socials} options={{

                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, }}>
                        <Image source={require('../assets/news.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}

                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>News</Text>
                    </View>
                ),

            }} />
            <Tab.Screen name="Settings" component={Settings} options={{

                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10, right: 7 }}>
                        <Image source={require('../assets/settings.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94'
                            }}

                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Settings</Text>
                    </View>
                ),

            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;
