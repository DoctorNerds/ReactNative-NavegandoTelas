import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import Texto from '../componentes/Texto';
import useTextos from '../hooks/useTextos';

import logo from '../assets/logo.png';


export default function MelhoresProdutoresRotas() {

   const { legendaMelhoresProdutores, sobreNos, autor, contato } = useTextos();

    return <View style={estilos.item}>
    <Texto style={estilos.boasVindas}>  {legendaMelhoresProdutores} </Texto>
    <Texto style={estilos.legenda}>  {sobreNos} </Texto>
    <Texto style={estilos.legenda}>  {autor} </Texto>
    <Texto style={estilos.contato}>  {contato} </Texto>
    <Image source={logo} style={estilos.imagem} />
  </View>
    
}

const estilos = StyleSheet.create({
    item: {
     // flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#ECECEC",
      paddingVertical: 16,
      marginHorizontal: 16,
      alignItems: "center",
    },
    imagem: {
      width: 200,
      height: 200,
    },
    boasVindas: {
      marginTop: 24,
      fontSize: 36,
      lineHeight: 42,
      fontWeight: 'bold',
      color: '#464646'
    },
    legenda: {
      marginTop: 24,
      fontSize: 20,
      lineHeight: 30,
      color: '#A3A3A3',
    },
    contato: {
      marginTop: 18,
      fontSize: 20,
      lineHeight: 30,
      alignItems: "center",
      fontWeight: 'bold',
      color: '#A3A3A3',
    }
  });
