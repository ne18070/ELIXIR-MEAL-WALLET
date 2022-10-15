import React, { FunctionComponent } from "react";
import styled from "styled-components";

//colors
import colors from "../../src/constants/colors";

const StyledText = styled.Text`
    font-size: 13px;
    color: ${colors.white};
    text-align: left;
    font-family: Lato-Regular;
`;


// types
import { TextProps } from "./types";

const SmallText: FunctionComponent<TextProps> = (props) =>{
    return <StyledText style={props.textStyles}> {props.children}</StyledText>;
}

export default SmallText;