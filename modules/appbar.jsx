

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Header, HeaderTitle } from "@react-navigation/elements";

import {
   StyleSheet,
   View,
   Text,
   Image,
} from "react-native";

export default function AppBar( props ) {

   return( <>
      <Header title="" 
         headerTitleAlign="center"
         headerLeft={ () => (
            <Text style={{ fontSize: 40, }}>::</Text>
         ) }
         headerStyle={{ height: 90, elevation: 10, }}
         headerBackground={ () => ( <>
            <View 
               style={ {
                  backgroundColor: "#00559C", 
                  height: 90,
                  flexDirection: "row", 
                  alignItems: "flex-end", 
                  justifyContent: "space-between",
                  elevation: 10,
               } } 
            >
               <View 
                  style={ {
                     height: "100%", 
                     width: 40,
                  } }
               >
               </View>
               <View 
                  style={ {
                     flex: 1, 
                     alignItems: "center", 
                     justifyContent: "center",
                  } }
               >
                  <Image 
                     style={ {
                        width: 110, 
                        height: 60,
                     } }
                     source={ require( "../assets/images/EA-logo-ap.png" ) }
                  />
               </View>
               <View 
                  style={ {
                     height: "100%", 
                     width: 40,
                  } }
               >
               </View>
            </View>
         </> ) }
      /> 
   </> );

}
const 
   s = StyleSheet.create( {
      appbar: {
         backgroundColor: "#00559C", 
         height: 90,
         flexDirection: "row", 
         alignItems: "flex-end", 
         justifyContent: "space-between",
         elevation: 10,
      },
      l: {
         height: "100%", 
         width: 40,
      },
      r: {
         height: "100%", 
         width: 40,
      },
      c: {
         flex: 1, 
         alignItems: "center", 
         justifyContent: "center",
      },
      i: {
         width: 110, 
         height: 60,
      }
   } )
;
