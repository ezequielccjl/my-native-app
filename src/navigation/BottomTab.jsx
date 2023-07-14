import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../components/Main';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Camara from '../components/Camara';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
        name="Perritos"
        component={Main}
        options={{
          tabBarLabel: 'Perritos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" color={color} size={size} />
          ),
        }}
      />
        <Tab.Screen 
        name='Camara' 
        component={Camara}
        options={{
            tabBarLabel: 'Camara',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomTab