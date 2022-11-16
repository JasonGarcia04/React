import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {


    return (


        <View style={styles.container}>

            <View style={styles.banner}>
                <Image source={require('../assets/gcjail.jpg')} style={styles.image}/>
                <Image source={require('../assets/gcjail.jpg')} style={styles.image}/>
                <Image source={require('../assets/gcjail.jpg')} style={styles.image}/>
                <Image source={require('../assets/gcjail.jpg')} style={styles.image}/>
            </View>


            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image source={require('../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,

                        }}

                    />
                    <Text>Something</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image source={require('../assets/jail.png')}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,

                        }}

                    />
                    <Text>Inmates</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Image source={require('../assets/book.png')}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,

                        }}

                    />
                    <Text>Warrants</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 4</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 5</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 6</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 7</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 8</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text>Box 9</Text>
                </View>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        

    },

    box: {
        width: '33.3%',
        height: '12%',
        padding: 10,

    },

    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    top: {
        width: '100%',
        height: '5%',
        padding: 5,
        backgroundColor: '#734d26',
        alignItems: 'center',
        justifyContent: 'center',

    },

    headerText: {
        fontWeight: 'bold',
        fontSize: '20',
        color: 'white'
    },

    banner: {
        width: '100%',
        height: '20%',
        backgroundColor: '#734d26',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        


    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white",
        
        
      }

});
