import React, { memo } from 'react';
import Background from '../components/Background/Background';
import Logo from '../components/Logo';
import Header from '../components/Header/Header';
import Button from '../components/Buttons/RegularButton';
import Paragraph from '../components/Paragraph/Paragraph';
import { Navigation } from '../src/types';

export type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>MEAL WALLET</Header>

    <Paragraph>
      Slogan.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Se connecter
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      S'enregistrer
    </Button>
  </Background>
);

export default memo(HomeScreen);



























// import React, { FunctionComponent } from "react";
// import { StatusBar } from "expo-status-bar";
// import styled from "styled-components";
// import { Navigation } from '../src/types';


// type Props = {
//     navigation: Navigation;
//   };
  
// // custom components
// import colors from "../src/constants/colors";
// import  { Container } from "../components/shared";
// import CardSection from "../components/Cards/CardSection";
// import TransactionSection from "../components/Transactions/TransactionSection";

// const HomeContainer = styled(Container)`
//     background-color: ${colors.baseColor};
//     width: 100%;
//     flex: 1;
// `;


// // cards logos 
// import logo1 from "./../assets/cards/visa_white.png";
// import logo2 from "./../assets/cards/mc.png";


// // types
// import { RootStackParamList } from "../navigators/RootStack";
// import { StackScreenProps } from "@react-navigation/stack";
// export type Props = StackScreenProps<RootStackParamList, "Home">;

// const Home: FunctionComponent<Props> = ( { navigation}) => {
//     const cardsData = [
//         {
//             id:1,
//             accountNo:"004567890",
//             balance: 10,
//             alias: "Work Debit",
//             // logo:logo1,
//         },
//         // {
//         //     id:2,
//         //     accountNo:"75757575",
//         //     balance: 15,
//         //     alias: "Work Debit",
//         //     logo:logo2,
//         // },
//         // {
//         //     id:3,
//         //     accountNo:"873945777",
//         //     balance: 55,
//         //     alias: "Work Debit",
//         //     logo:logo1,
//         // },
//         // {
//         //     id:4,
//         //     accountNo: "712411002",
//         //     balance: 70,
//         //     alias: "Work Debit",
//         //     logo:logo2,
//         // }
//         ];
    
//     const transctionsData = [
//         {
//             id: 1,
//             amount: "86",
//             date: "10 Oct 2022",
//             title: "Mafe",
//             subtitle: "Almadies",
//             art: {
//                 background: "white",
//                 icon: "fast-food",
//             },
//         },
//         {
//             id: 2,
//             title: "Souf Kanja",
//             subtitle: "Ngor",
//             amount: "5",
//             date: "9 Oct 2022",
//             art: {
//                 icon: "fast-food",
//                 background: colors.moneyColor,
//             },
//         },{
//             id: 3,
//             amount: "7",
//             date: "8 Oct 2022",
//             title: "Mafe Poulet",
//             subtitle: "Dakar Plateau",
//             art: {
//                 background: colors.moneyColor,
//                 icon: "fast-food",
//             },
//         },
//         {
//             id: 4,
//             title: "Mafe Poulet",
//             subtitle: "test",
//             amount: "9",
//             date: "7 Oct 2022",
//             art: {
//                 icon: "fast-food",
//                 background: colors.moneyColor,
//             },
//         },{
//             id: 5,
//             amount: "8",
//             date: "6 Oct 2022",
//             title: "Riz au poisson",
//             subtitle: "Almadies",
//             art: {
//                 background: colors.moneyColor,
//                 icon: "fast-food",
//             },
//         },
//         {
//             id: 6,
//             title: "test",
//             subtitle: "test",
//             amount: "15",
//             date: "5 Oct 2022",
//             art: {
//                 icon: "fast-food",
//                 background: colors.moneyColor,
//             },
//         }
//     ];
//     return (
//         <HomeContainer>
//             <StatusBar style="dark"/>
//             <CardSection data={cardsData}/>
//             <TransactionSection data={transctionsData}/>
//         </HomeContainer>
//     );
// };

// export default Home;