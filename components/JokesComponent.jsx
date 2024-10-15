import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JokesComponent = (props) => {
  return (
    <View style={styles.container} >
        <Image 
        resizeMode='cover'
        source={{uri:'https://api.chucknorris.io/img/avatar/chuck-norris.png'}} 
        style={styles.img}></Image>
      <Text style={styles.text}>Your jokes</Text>
      <Text style={styles.textBody}>{props.joke}</Text>

    </View>
  )
}

export default JokesComponent

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1e293b',
        width:'90%',
        height:400,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        gap:12,
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    textBody:{
        color:'white',
        fontWeight:'normal',
        fontSize:16,
    },
    img:{
        width:86,
        height:86
    }
})