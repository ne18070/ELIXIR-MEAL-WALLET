import { Dimensions } from "react-native";
import colors from "../src/constants/colors";
import styled from 'styled-components/native';
export const Container = styled.View`
    flex:1;
    align-items:center;
    background-color:${colors.white};
    `;

export const ScreenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;