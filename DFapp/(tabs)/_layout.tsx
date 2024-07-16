import { Tabs } from 'expo-router';
import React from 'react';
import {
   StyleSheet,
   View,
   Image, 
   Text,
} from "react-native";
import { Header, HeaderTitle } from "@react-navigation/elements";

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

   return( <>
      <Header title="Céo" 
         headerTitleAlign="center"
         headerLeft={ () => (
            <Text style={{ fontSize: 40, }}>::</Text>
         ) }
         headerStyle={{ height: 84, }}
         headerBackground={ () => ( <>
            <View style={ s.appbar }>
               <View style={ s.l }></View>
               <View style={ s.c }>
                  <Image style={ s.i }
                     source={ require( "../../assets/images/icon.png" ) }
                  />
               </View>
               <View style={ s.r }></View>
            </View>
         </> ) }
      />
      
      <Tabs
         screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
         headerShown: false,
         header: (  ) => ( <>
               <View style={ s.appbar }>
                  <View style={ s.l }></View>
                  <View style={ s.c }>
                     <Image style={ s.i }
                        source={ require( "../../assets/images/icon.png" ) }
                     />
                  </View>
                  <View style={ s.r }></View>
               </View>
         </> ),

         }}>
         <Tabs.Screen
         name="index"
         options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
               <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
         }}
         />
         <Tabs.Screen
         name="explore"
         options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
               <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
            ),
         }}
         />
      </Tabs>
   </> );
}

const 
   s = StyleSheet.create( {
      appbar: {
         backgroundColor: "#00559C", 
         // flex: 1,
         height: 74,
         flexDirection: "row", 
         alignItems: "center", 
         justifyContent: "space-between",
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
         width: 60, 
         height: 60,
      }
   } )
;