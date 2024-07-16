

import * as React from "react";
import { 
   BottomNavigation, 
   Text, 
} from "react-native-paper";

import Customers from "../app/customers";

const 
   CustomersRoute = () => <Customers />
   ,
   AlbumsRoute = () => <Text>Albums</Text>
   ,
   RecentsRoute = () => <Text>Recents</Text>
   ,
   NotificationsRoute = () => <Text>Notifications</Text>
;

export default function BottomNavBar( props ) {

   const [index, setIndex] = React.useState(0);
   const [routes] = React.useState( [
      { key: "music", title: "Clientes", focusedIcon: "heart", unfocusedIcon: "heart-outline"},
      { key: "albums", title: "Albums", focusedIcon: "album" },
      { key: "recents", title: "Recents", focusedIcon: "history" },
      { key: "notifications", title: "Notifications", focusedIcon: "bell", unfocusedIcon: "bell-outline" },
   ] );

   const renderScene = BottomNavigation.SceneMap( {
      music: CustomersRoute,
      albums: AlbumsRoute,
      recents: RecentsRoute,
      notifications: NotificationsRoute,
   } );

   return (
      <BottomNavigation
         navigationState={{ index, routes }}
         onIndexChange={setIndex}
         renderScene={renderScene}
      />
   );
}