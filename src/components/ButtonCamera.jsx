import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

const ButtonCamera = ({title, onPress, icon, color}) => {
  return (
        <TouchableOpacity onPress={onPress} style={styles.boton}>
            <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'}></Entypo>
            <Text style={styles.texto}>{title}</Text>
        </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    boton:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    texto:{
        fontWeight:'bold',
        fontSize:16,
        color:'#f1f1f1',
        marginLeft:10
    }
})

export default ButtonCamera