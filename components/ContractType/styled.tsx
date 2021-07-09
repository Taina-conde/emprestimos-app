import styled from 'styled-components';

export const Box = styled.div`
display: flex;
`
export const Title = styled.h1`
font-weight: normal;
 font-size: 33px;
 text-align: center;
`
export const Text = styled.p`
font-size: 33px;
text-align: center;
display: block;
color: ${props => props.theme.colors.text.main};
`
export const HelperText = styled.p`
color: ${props => props.theme.colors.text.main};
font-size: 25px;
text-align: right;
display: block;
`