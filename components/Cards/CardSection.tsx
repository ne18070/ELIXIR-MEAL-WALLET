import React, { FunctionComponent, memo } from "react";
import styled from "styled-components/native";

// components
const CardList = styled.FlatList`
    width: 100%;
    flex: 1;
    // padding-left: 40px;
    // padding-bottom: 10px;
    margin:15%;
`;
import { Navigation } from '../../src/types';

type Props = {
  navigation: Navigation;
};
import { CardSectionProps } from "./types";
import CardItem from "./CardItem";
import BackButton from "../Buttons/BackButton";
 
const CardSection: FunctionComponent<CardSectionProps> = (props , {navigation}:Props ) =>(
    <>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />
      <CardList
          data={props.data}
          horizontal={true}
          showHorizontalScrollIndicator={false}
          contentContainerStyle={{
              paddingRigh: 25,
              alignItems: "center",
          }}
          keyExtractor= {({ id }:any)  => id.toString()}
          renderItem={({item }: any) => <CardItem{...item}/>}
      />
    
    </>
);

export default memo(CardSection);
