import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Principal from '../Principal';
import Perfil from '../Perfil';

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    if(route.name == 'Principal'){
                        iconName = 'home';
                    } else if (route.name == 'Perfil') {
                        iconName = 'user';
                    }
                    return <Feather name={iconName} size={size} color={color}/>;
                },
           })}
                tabBarOptions={{
                    activeTintColor: '#ffa951',
                    inactiveTintColor: 'gray'
                }}>
                <Tab.Screen name="Principal" component={Principal} />
                <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}