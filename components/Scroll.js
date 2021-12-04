import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native';

const Scroll = () => {
    return (
       <ScrollView horizontal style={{height:50,width:'100%',position:'absolute',height:235,left:10}} showsHorizontalScrollIndicator={false}>
           <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:15,}}>
           <View style={{...styles.border,...styles.background}}>
               <Text style={styles.text}>All</Text>
               <Text style={styles.text}>Matches</Text>
           </View>
           <View style={styles.border}>
               <Text style={styles.text}>New</Text>
               <Text style={styles.text}>Matches</Text>
           </View>
           <View style={styles.border}>
               <Text style={styles.text}>Premium</Text>
               <Text style={styles.text}>Matches</Text>
           </View>
           <View style={styles.border}>
               <Text style={styles.text}>New</Text>
               <Text style={styles.text}>Matches</Text>
           </View>
           <View style={styles.border}>
               <Text style={styles.text}>New</Text>
               <Text style={styles.text}>Matches</Text>
           </View>
           <View style={styles.border}>
               <Text style={styles.text}>New</Text>
               <Text style={styles.text}>Matches</Text>
           </View>
        </View>
       </ScrollView>
    )
}

export default Scroll

const styles = StyleSheet.create({
    border:{
        height:50,
        width:90,
        borderColor:'white',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
    },
    background:{
       backgroundColor:'rgba(122, 125, 128,0.4)'
    },
    text:{
        color:'white'
    }
})
