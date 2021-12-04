import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity,ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Card from '../components/Card';

import Scroll from '../components/Scroll';
import Tab from '../components/Tab';

const MatchScreen = (props) => {
    return (
        <LinearGradient
            colors={['#00d49c', '#17abb3']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{ flex: 1 }}>
            <StatusBar backgroundColor='transparent' translucent={true} />
            <LinearGradient
                colors={['#00d49c', '#17abb3']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.prime}>
                        <Text style={{ alignSelf: 'center', color: '#8400ff', fontWeight: 'bold', fontSize: 17, paddingLeft: 5 }}>PRIME</Text>
                    </View>
                    <View style={styles.regular}>
                        <Text style={{ alignSelf: 'center', color: 'white' }}>Regular</Text>
                    </View>
                </View>
                <Scroll/>
                <View style={{position:'absolute',top:160,left:30}}>
                    <Text style={styles.text}>1,768 Matches based on your</Text>
                    <Text style={styles.text}>preferences</Text>
                </View>
                <View style={{position:'absolute',height:35,width:130,borderRadius:30, backgroundColor:'rgba(122, 125, 128,0.4)',top:230,left:30,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontWeight:'bold'}}>1,768 Yet to view</Text>
                </View>
            </LinearGradient>
            <ScrollView style={{height:130, backgroundColor: '#f7f7f7', borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
                <View style={{height:50,width:'100%',flexDirection:'row'}}>
                    <Text style={styles.bold}>Match Yet To View</Text>
                    <View style={{flexDirection:'row',alignItems:'center',marginLeft:100}}>
                    <Image source={require('../assets/icons/filter.png')} style={{height:17,width:20,paddingHorizontal:20}} resizeMode='contain' />
                    <Image source={require('../assets/icons/setting.png')} style={{height:17,width:20}} resizeMode='contain' />
                    </View>
                </View>
                <Card/>
                <View style={{height:0.5,width:'90%',backgroundColor:'grey',alignSelf:'center',marginTop:40}}></View>
                <Card/>
            </ScrollView>
            <Tab/>
        </LinearGradient>
    )
}

export default MatchScreen

const styles = StyleSheet.create({
    regular: {
        position: 'absolute',
        top: 40,
        left: 100,
        height: 35,
        width: 80,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 0.8,
        backgroundColor: '#15848a',
        justifyContent: 'center'
    },
    prime: {
        position: 'absolute',
        top: 43,
        left: 160,
        height: 30,
        width: 100,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center'
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    bold:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginLeft:30
    }
})
