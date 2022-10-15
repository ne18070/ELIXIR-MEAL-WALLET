import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';

const Main = () => (
  <Provider theme={theme}>
    <App />
  </Provider>
);

export default Main;




















// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';

// // customs font
// import AppLoading from "expo-app-loading";
// import {useFonts} from "expo-font";

// // React Navigation 
// import RootStack from './navigators/RootStack';

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     "Lato-Bold" : require("./assets/fonts/Lato-Bold.ttf"),
//     "Lato-Regular" : require("./assets/fonts/Lato-Regular.ttf"),
//   })

//   if(!fontsLoaded){
//     return <AppLoading/>;
//   }
//   return (
//       <RootStack Welcome={undefined} Home={undefined}/>
//   );
// }

