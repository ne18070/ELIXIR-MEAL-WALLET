import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// colors 
import colors from "../../src/constants/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal:10%;
    padding-top: 5px;
    flex: 2;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactionList = styled.FlatList`
    width: 100%;
`;

// types
import { TransactionSectionProps } from "./types";
import TransactionItem from "./TransactionItem";

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) =>{
    return (
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 25}}>
                <RegularText textStyles={{fontSize: 19, color: colors.secondaryColor}}>
                    Transaction
                </RegularText>
                <SmallText textStyles={{color: colors.secondaryColor}}>
                    Recent
                    <Ionicons name="caret-down" size={13} color={colors.gray}></Ionicons>
                </SmallText>
            </TransactionRow>
            <TransactionList
                data={props.data}
                showVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 25,
                }}
                keyExtractor= {({ id }: any) => id.toString()}
                renderItem={({ item }:any) => <TransactionItem {...item}/>}
            />
        </TransactionSectionBackground>
    );
};

export default TransactionSection;