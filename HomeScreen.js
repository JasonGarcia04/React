import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }){


    return (
    <View style={styles.container}>
        <Text>This is the home screen</Text>
    </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
