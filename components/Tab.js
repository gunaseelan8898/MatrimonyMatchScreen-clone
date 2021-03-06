import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'

const Icons = [
    {
        icon: require('../assets/icons/home.png'),
        name:'Home'
    },
    {
        icon: require('../assets/icons/match.png'),
        name:'Matches'
    },
    {
        icon: require('../assets/icons/chat.png'),
        name:'Mailbox'
    },
    {
        icon: require('../assets/icons/notification.png'),
        name:'Notifications'
    },
    {
        icon: require('../assets/icons/search.png'),
        name:'Search'
    },
]

const Tab = () => {
    return (
        <View style={{height:55,width:'100%',backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            {Icons.map((item,index) => 
               <TouchableOpacity key={index} style={{alignItems:'center',marginHorizontal:12,marginTop:5}}  > 
                   <Image source={item.icon} style={{height:20,width:25}} resizeMode='contain' />
                <Text style={{color:'black',fontSize:12}} >
                {item.name}
                </Text> 
                </TouchableOpacity>
                )}
        </View>
    )
}

export default Tab

const styles = StyleSheet.create({})
