import styled from "styled-components";
import PrimaryButton from '../shared/PrimaryButton';

export const Title = styled.h1`
  font-size: 33px;
  color: ${(props) => props.theme.colors.primary.main};
  text-align: center;
  padding: 20px;
  font-weight: normal;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0;
  font-size: 0.8em;
  position: relative;
`;
export const HelperText = styled.p`
  color: ${(props) => props.theme.colors.text.error};
  
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;
export const Button = styled(PrimaryButton)`
  margin-top: 20px;
  @media (min-width: 480px) {
    height: 62px;
    margin-top: unset;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

  
  }
`;
export const ClientBox = styled.div`
margin: 50px auto;
text-align: center;
 width: 473px;
 height: 355px;
 background-color: ${props => props.theme.input.backgroundColor.primary};
 border-radius: ${props => props.theme.input.borderRadius};
 color: ${props => props.theme.colors.text.main};
 display: flex;
 flex-direction: column;
 padding: 10px;
 font-size: 33px;
`
export const ClientCpf = styled.div`    
color: ${props => props.theme.colors.secondary.main};
`
export const ClientName = styled.div`
text-transform: capitalize;
color: ${props => props.theme.colors.primary.main};
`