import React, { memo } from 'react';
import Background from '../components/Background/Background';
import Logo from '../components/Logo';
import Header from '../components/Header/Header';
import Button from '../components/Buttons/RegularButton';
import { Navigation } from '../src/types';
import Paragraph from '../components/Paragraph/Paragraph';
import Transactions from './Transactions';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Ma Commande.
    </Paragraph>
     <Button mode="outlined" onPress={() => navigation.navigate('Transactions')}>
      Mes Transactions
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('ScannerScreen')}>
      SCANNER LE QR CODE
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
