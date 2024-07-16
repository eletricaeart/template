

import React from "react";
import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";
import {
   Appbar,
   Button,
   BottomNavigation
} from "react-native-paper";
// import { PaperProvider } from 'react-native-paper';
import clb_s from "../../assets/stylesheet/globalStyle";


export default function Home( props ) {


   return( <>
      {/* <Appbar
         elevated={ true }
         mode="center-aligned"
         content={ title="oi" }
         style={ clb_s.appbar }
      >
         <Appbar.Content title="Céo" color="#fff"></Appbar.Content>
      </Appbar> */}
      <ScrollView style={ clb_s.homepage }>
         <Text>Home</Text>

         <Button
            mode="contained"
            buttonColor="#fc0fc0"
         >
            CADASTRAR
         </Button>
         
      </ScrollView>
   </> );
}