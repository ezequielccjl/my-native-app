import React, { Text, View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  titulo:{
    fontSize:25,
    fontWeight:'bold'
  },
  body:{
    // marginTop:Constants.statusBarHeight,
    marginBottom:120,
    padding:10
  }
})

const Main = () => {
  return (
    <View style={styles.body}>
        <Text style={styles.titulo}>Mi app de perritos :)</Text>
        <RepositoryList />
    </View>
  )
}

export default Main