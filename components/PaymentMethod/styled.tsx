import styled from "styled-components";
import PrimaryButton from "../shared/PrimaryButton";

export const Box = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary.main};
  font-weight: normal;
  font-size: 33px;
  text-align: center;
`;
export const Text = styled.p`
  font-size: 33px;
  text-align: center;
  display: block;
  color: ${(props) => props.theme.colors.text.main};
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
export const HelperText = styled.p`
  color: ${(props) => props.theme.colors.text.main};
  font-size: 25px;
  text-align: right;
  margin: 5px;
  align-self: flex-end;
  display: block;
`;
export const Button = styled(PrimaryButton)`
    
  padding: 20px;
  width: 390px;
  height: 98px;
  font-size: 35px;
  font-weight: 700;
`;
