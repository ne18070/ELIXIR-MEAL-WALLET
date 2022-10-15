import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import colors from "../../src/constants/colors";
import { View } from "react-native";
// components
import { ScreenWidth } from "../shared";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

import { useNavigation } from "@react-navigation/native";
const CardBackground = styled.ImageBackground`
    height: 75%;
    width: ${ScreenWidth * 0.67}px;
    resize-mode: cover;
    background-color: ${colors.gray};
    border-radius: 25px;
    margin-right: 25px;
    overflow-hidden;
`;
const CardTouchable = styled.TouchableHighlight`
    height:100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1
`;

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Logo = styled.Image`
    width: 100%;
    height: 80%;
    resize-mode: contain;
    flex: 1;
`;

// images
import card_bg from "../../assets/bgs/background_transparent.png";

// types
import { CardProps } from "./types";
import { Navigation } from '../../src/types';

export type Props = {
  navigation: Navigation;
};

const CardItem: FunctionComponent<CardProps> = (props, {navigation}: Props) => {
    // configuring navigation
    const handlePress = () => {
        navigation.navigate("BalanceScreen")
    };
    return (
        <CardBackground source={card_bg}>
            <CardTouchable underlayColor={colors.slateGrey}>
                <TouchableView>
                    <CardRow>
                        <RegularText textStyles={{color: colors.white}}>
                            ***** {props.accountNo.slice(6,10)}
                        </RegularText>
                    </CardRow>
                    <CardRow>
                        <View style={{flex: 3}}>
                            <SmallText textStyles={{
                                marginBottom: 5, color: colors.lightGrey
                            }}>
                                Total Repas
                            </SmallText>
                            <RegularText textStyles={{fontSize: 19}}>
                             {props.balance}
                            </RegularText>
                        </View>
                        {/* <Logo source={props.logo}></Logo> */}
                    </CardRow>
                </TouchableView>
            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;