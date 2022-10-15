import React, {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from 'styled-components/native';
import { Alert } from 'react-native';
// custom components
import colors from "../src/constants/colors"
import { Container } from "../components/shared";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.gray};
    justify-content:space-between;
    width:100%;
    height:100%;
    `;

const TopSection = styled.View`
    width:100%;
    flex:1;
    max-height:55%;
    `;

const TopImage = styled.Image`
    width:100%;
    height:100%;
    resize-mode:stretch;
    `;

const BottomSection = styled.View`
    width: 100%;
    padding: 25%;
    flex: 1;
    justify-content: flex-end;
    `;


// image
import background from "../assets/bgs/background_1.jpg";
import RegularButton from "../components/Buttons/RegularButton";


// types
import { Navigation } from '../../src/types';

type Props = {
  navigation: Navigation;
};

const Welcome = ({ navigation }:Props) => {
    return (
        <>
        <StatusBar style="light"/>
        <WelcomeContainer>
            <TopSection >
                <TopImage source={background}></TopImage>
            </TopSection>
            <BottomSection>
                {/* <BigText textStyles={{width: "100%", marginBottom: 25}}>
                    Ma Commande
                </BigText> */}
                <SmallText textStyles={{width: "100%", marginBottom: 25}}>
                    Elixir
                </SmallText>
                <RegularButton onPress={() => Alert.alert("Pressed")}>
                    Get Started
                </RegularButton>
            </BottomSection>
        </WelcomeContainer>
        </>
    );
};

export default Welcome;