import React, { memo } from 'react';
import Background from '../components/Background/Background';
import Logo from '../components/Logo';
import Header from '../components/Header/Header';
import Button from '../components/Buttons/RegularButton';
import { Navigation } from '../src/types';
import Paragraph from '../components/Paragraph/Paragraph';

import { StatusBar } from 'expo-status-bar';


import { CardProps } from "../components/Cards/types";
import AmountSection from '../components/Balance/AmountSection';
import BalanceCardSection from '../components/Balance/BalanceCardSection';

// types
export type Props = {
  navigation: Navigation;
};

const Balance= (    {navigation}:Props  ) => {
  return (
    <Background>
        <StatusBar style="dark"/>
        {/* <AmountSection balance={route?.params?.balance} />
        <BalanceCardSection {...route?.params} /> */}
        <Button mode="outlined" onPress={() => navigation.navigate('Dashboard')}>
          Retour
        </Button>
    </Background>
  );
}

export default memo(Balance);