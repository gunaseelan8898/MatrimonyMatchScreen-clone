import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Card = props => {
    return (
        <View style={styles.card}>
            <Image source={require('../assets/priya.jpeg')} style={styles.image} resizeMode='contain' />
            <View style={{ flexDirection: 'row', position: 'absolute', top: 30, left: 160 }}>
                <View style={{ flexDirection: 'row', right: 15 }}>
                    <Image source={require('../assets/icons/verified.png')} style={styles.icon} resizeMode='contain' />
                    <Text style={styles.text}>Verified</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/icons/crown.png')} style={styles.icon} resizeMode='contain' />
                    <Text style={styles.text}>Assisted</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>priya</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textdetails}>26 yrs,</Text>
                    <Text style={styles.textdetails}>5'5",</Text>
                    <Text style={styles.textdetails}>Mudaliyar,</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textdetails}>chithirai,</Text>
                    <Text style={styles.textdetails}>MBBs,</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textdetails}>Doctor,</Text>
                    <Text style={styles.textdetails}>Chennai,</Text>
                    <Text style={styles.textdetails}>Tamil Nadu</Text>
                </View>
            </View>
            <View style={styles.options}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/icons/whatsapp.png')} style={styles.icon} resizeMode='contain' />
                    <Text style={{ ...styles.textdetails, ...{ fontSize: 13, marginLeft: 8 } }}>WhatsApp</Text>

                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/icons/password.png')} style={styles.icon} resizeMode='contain' />
                    <Text style={{ ...styles.textdetails, ...{ fontSize: 13, marginLeft: 8 } }}>Don't show</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/icons/star.png')} style={styles.icon} resizeMode='contain' />
                    <Text style={{ ...styles.textdetails, ...{ fontSize: 13, marginLeft: 8 } }}>ShortList</Text>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        //backgroundColor:'blue',
        height:180,
        width: "90%",
        flexDirection: 'row'
    },
    image: {
        position: 'absolute',
        top: 30,
        left: 18,
        height: 120,
        width: 120,
        borderRadius: 40
    },
    icon: {
        height: 15,
        width: 18
    },
    text: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 5
    },
    details: {
        position: 'absolute',
        left: 150,
        top: 55,
    },
    textname: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    textdetails: {
        fontSize: 15,
        color: 'black'
    },
    options: {
        position: 'absolute',
        left: 25,
        top: 170,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        height: 20,
        width: 1,
        backgroundColor: 'grey',
        marginHorizontal: 13
    }
})
