import styled from "styled-components";
import PrimaryButton from "../shared/PrimaryButton";
import Input from "../shared/Input";

interface HeaderProps {
  readonly green?: boolean;
}
export const Title = styled.h1`
  font-size: 21px;
  color: ${(props) => props.theme.colors.primary.main};
  text-align: center;
  font-weight: normal;
`;
export const Text = styled.p`
  font-size: 21px;
  color: ${(props) => props.theme.colors.primary.main};
  text-align: left;
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Row = styled.div`
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
  text-align: center;
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
  padding: 20px;
  font-style: italic;
  margin: 20px 0;
  flex-grow: 1;
  background-color: ${(props) =>
    props.green
      ? props.theme.colors.background.secondary
      : props.theme.input.backgroundColor.primary};
  border-radius: ${(props) => props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.primary.main};
`;
export const ItemValue = styled.span`
color: ${props => props.theme.colors.secondary.main};
background-color: "#FFFFFF";
border-radius: ${props => props.theme.input.borderRadius};
padding: 10px;
`
