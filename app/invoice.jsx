

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

export default function Invoice() {

   return(
      <PaperProvider>
         <View>
            <Text>Invoice</Text>
         </View>
      </PaperProvider>
   );
}