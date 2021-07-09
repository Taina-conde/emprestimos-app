import styled from "styled-components";
import PrimaryButton from "../shared/PrimaryButton";
import Input from "../shared/Input";

interface HeaderProps {
  readonly green?: boolean;
}

export const Text = styled.p`
  font-size: 21px;
  color: ${(props) => props.theme.colors.primary.main};
  align-self: flex-start;

`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Row = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const Col = styled.div`
  margin: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  
`;
export const CardInput = styled(Input)`
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  padding-left: 15px;
  font-style: italic;
`;

export const Button = styled(PrimaryButton)`
  margin-top: 20px;
  @media (min-width: 480px) {
    font-size: 39px;
    height: 98px;
    width: 100%;
  }
`;
export const HeaderItem = styled.div<HeaderProps>`
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  padding: 15px;
  font-style: italic;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${(props) =>
    props.green
      ? props.theme.colors.background.secondary
      : props.theme.input.backgroundColor.primary};
  border-radius: ${(props) => props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.primary.main};
`;
export const ItemValue = styled.div`
  color: ${(props) => props.theme.colors.secondary.main};
  background-color: #ffffff;
  border-radius: ${(props) => props.theme.input.borderRadius};
  padding: 10px;
  width: 30%;
`;