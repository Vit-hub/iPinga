import React from 'react';
import { Text } from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import { RestauranteFoto, RestauranteView, RestaurantesInfo } from './style';

const RestauranteItem = ({ foto, nome, key, nota, categoria, distancia, valorFrete, tempoEntrega}) => {
    return (
        <RestauranteView key={key} >
            <RestauranteFoto
                source={{
                    uri: foto.trim(),
                    width: 50,
                    height: 50,
                    resizeMode: 'cover'
                }}
            />
            <RestaurantesInfo>
                <Text>{nome}</Text>
                <Text><AntDesign name="star" size={12} color="#f9a825"/>  {nota} - {categoria} - {distancia}</Text>
                <Text>{tempoEntrega} - R$ {valorFrete}</Text>
                <Text>{}</Text>
            </RestaurantesInfo>
        </RestauranteView>
    );
}

export default RestauranteItem;