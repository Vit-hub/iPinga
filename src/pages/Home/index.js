import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView, Image, View, ButtonContainer } from './style'
import banner from '../../assets/img/banner.png';
import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir Pinga nunca foi tão fácil!</Text>
          <Image source={banner}/>
          <Text>Permita a localização</Text>
          <Text>Para descobrir os bares da região!</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate('Main')} />
          <Button text="ENTRAR" theme="primary" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
