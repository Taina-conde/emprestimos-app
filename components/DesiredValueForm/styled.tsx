import styled from "styled-components";

interface InputProps {
  readonly border: string;
};

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
  border: ${props => props.border || 'none'};
  padding: 10px;
  text-align: center;
  height: 62px;
  font-size: 30px;
  flex-grow: 2;
  background-color: ${(props) => props.theme.input.backgroundColor.primary};
  border-radius: ${(props) => props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.text.main};

`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 480px) {
    flex-direction: row;
  }
`;
export const Button = styled.button`
  height: 53px;
  width: 160px;
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary.main};
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: capitalize;
  border-radius: ${(props) => props.theme.input.borderRadius};
  @media (min-width: 480px) {
    margin-top: unset;
    margin-left: 20px;
  }
`;
