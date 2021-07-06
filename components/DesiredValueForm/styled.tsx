import styled from "styled-components";
import SecondaryButton from "../shared/SecondaryButton";

interface InputProps {
  readonly border: string;
}

export const Title = styled.h1`
  font-size: 40px;
  color: ${(props) => props.theme.colors.primary.main};
  text-align: center;
  text-transform: capitalize;
  padding: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input<InputProps>`
  border: ${(props) => props.border || "none"};
  padding: 10px;
  text-align: center;
  height: 62px;
  font-size: 30px;
  flex-grow: 2;
  background-color: ${(props) => props.theme.input.backgroundColor.primary};
  border-radius: ${(props) => props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.text.main};
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
export const Button = styled(SecondaryButton)`
  margin-top: 20px;
  @media (min-width: 480px) {
    margin-top: unset;
    margin-left: 20px;
  }
`;
