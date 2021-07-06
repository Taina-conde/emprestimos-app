import styled from "styled-components";

export const Title = styled.h1`
font-size : 40px;
color: ${props => props.theme.colors.primary.main};
text-align: center;
text-transform: capitalize;
padding: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
    flex-grow: 2;
    background-color: ${props => props.theme.input.backgroundColor.primary};
    border-radius: ${props => props.theme.input.borderRadius};
    color: ${props => props.theme.colors.text.main};
    
`
