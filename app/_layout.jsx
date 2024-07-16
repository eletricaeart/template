

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Header, HeaderTitle } from "@react-navigation/elements";

import {
   StyleSheet,
   View,
   Text,
   Image,
} from "react-native";

import BottomNavBar from "../modules/bottomNavigationBar";

import { useColorScheme } from '@/hooks/useColorScheme';
import AppBar from "../modules/appbar";

"Prevent the splash screen from auto-hiding before asset loading is complete.";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const [loaded] = useFonts( {
      SpaceMono: require( '../assets/fonts/SpaceMono-Regular.ttf' ),
   } );

   useEffect( () => { 
      if (loaded) {
      SplashScreen.hideAsync();
      }
   }, [loaded] );

   if( !loaded ) {
      return null;
   }

   return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
         <AppBar />
         <BottomNavBar />
      </ThemeProvider>
   );

   const 
      s = StyleSheet.create( {
         appbar: {
            backgroundColor: "#00559C", 
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
}
