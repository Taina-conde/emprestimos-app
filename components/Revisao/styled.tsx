import styled from "styled-components";
import PrimaryButton from "../shared/PrimaryButton";

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
  text-align: right;
`;

export const Slider = styled.div`
  margin-top: 20px;
  @media (min-width: 480px) {
    font-size: 39px;
    height: 98px;
    width: 100%;
  }
  position: relative;
  input[type="radio"]{
    display: none;
  }
  label {
  color: ${props => props.theme.colors.text.secondary};
  float: left;
  text-align: center;
  cursor: pointer;
  transition: color .5s;
  background-color: ${props => props.theme.colors.primary.main};
  height: 98px;
  width: 50%;
  border-radius:${props => props.theme.input.borderRadius};
  line-height: 98px;
}

`

