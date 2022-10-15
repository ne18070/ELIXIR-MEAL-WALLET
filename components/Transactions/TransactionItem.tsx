import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

// colors 
import colors from "../../src/constants/colors";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import TransactionAvi from "./TransactionAvi";
import {View} from "react-native";

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    flex: 2;
`;

const RightView = styled.View`
    flex: 1;
`;


// types
import { TransactionProps } from "./types";

const TransactionItem : FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi 
                icon={props.art.icon} 
                background={props.art.background}
                />
                <View style={{marginLeft: 10}}>
                    <RegularText 
                        textStyles={{
                            color: colors.secondaryColor,
                            textAlign: "left",
                            marginBottom: 5,
                        }}
                        >
                        {props.title}
                    </RegularText>
                    <SmallText textStyles={{
                            color: colors.gray,
                            textAlign: "left",
                        }}>
                        {props.subtitle}
                    </SmallText>

                </View>
            </LeftView>
            <RightView>
            <View style={{marginLeft: 10}}>
                    <RegularText 
                        textStyles={{
                            color: colors.secondaryColor,
                            textAlign: "right",
                            marginBottom: 5,
                        }}
                        >
                        {props.amount}
                    </RegularText>
                    <SmallText textStyles={{
                            color: colors.gray,
                            textAlign: "right",
                        }}>
                        {props.date}
                    </SmallText>

                </View>
            </RightView>
        </TransactionRow>
    );
};

export default TransactionItem;