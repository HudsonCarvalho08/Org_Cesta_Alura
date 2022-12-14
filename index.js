import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';


import Topo from './componentes/Topo';
import Detalhes from '../../componentes/Detalhes';

import topo from '../../../assets/topo.png';





export default function Cesta({ topo, detalhes}) {
    return <>
    <Topo {...topo} />

    <View style = {estilos.cesta}>
        <Detalhes {...detalhes } />
        
    </View>
    </>
}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    
   
    
});
