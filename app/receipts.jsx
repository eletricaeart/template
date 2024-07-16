

import React from "react";
import { PaperProvider } from "react-native-paper";

import { 
   createMaterialBottomTabNavigator 
} from 'react-native-paper/react-navigation';

import {
   StyleSheet,
   View,
   Text,
} from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function Receipts() {

   return(
      <PaperProvider>
         <View>
            <Text>Recibos</Text>
         </View>
      </PaperProvider>
   );
}