import React, { memo } from 'react';
import Background from '../components/Background/Background';
import { StatusBar } from "expo-status-bar";
import { Navigation } from '../src/types';

type Props = {
  navigation: Navigation;
};
import TransactionSection from "../components/Transactions/TransactionSection";
import CardSection from "../components/Cards/CardSection";
import colors from '../src/constants/colors';

const cardsData = [
        {
            id:1,
            accountNo:"004567890",
            balance: 10,
            alias: "Work Debit",
            // logo:logo1,
        },
        ];
    
    const transctionsData = [
        {
            id: 1,
            amount: "86",
            date: "10 Oct 2022",
            title: "Mafe",
            subtitle: "Almadies",
            art: {
                background: "white",
                icon: "fast-food",
            },
        },
        {
            id: 2,
            title: "Souf Kanja",
            subtitle: "Ngor",
            amount: "5",
            date: "9 Oct 2022",
            art: {
                icon: "fast-food",
                background: colors.moneyColor,
            },
        },{
            id: 3,
            amount: "7",
            date: "8 Oct 2022",
            title: "Mafe Poulet",
            subtitle: "Dakar Plateau",
            art: {
                background: colors.moneyColor,
                icon: "fast-food",
            },
        },
        {
            id: 4,
            title: "Mafe Poulet",
            subtitle: "test",
            amount: "9",
            date: "7 Oct 2022",
            art: {
                icon: "fast-food",
                background: colors.moneyColor,
            },
        },{
            id: 5,
            amount: "8",
            date: "6 Oct 2022",
            title: "Riz au poisson",
            subtitle: "Almadies",
            art: {
                background: colors.moneyColor,
                icon: "fast-food",
            },
        },
        {
            id: 6,
            title: "test",
            subtitle: "test",
            amount: "15",
            date: "5 Oct 2022",
            art: {
                icon: "fast-food",
                background: colors.moneyColor,
            },
        }
    ];
const Transactions = ({ navigation }: Props) => (
    <>
       <StatusBar style="dark"/>
       <CardSection data={cardsData}/>
       <TransactionSection data={transctionsData}/>
    </>
);

export default memo(Transactions);