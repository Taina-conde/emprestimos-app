import styled from "styled-components";
import PrimaryButton from "../shared/PrimaryButton";
import Input from "../shared/Input";

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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  font-size: 0.8em;
  position: relative;
`;
export const HelperText = styled.p`
margin: 3px 0;
  color: ${(props) => props.theme.colors.text.error};
`;

export const Button = styled(PrimaryButton)`
  margin-top: 20px;
  @media (min-width: 480px) {
    font-size: 39px;
    height: 98px;
    width: 391px;
  }
`;
export const CardPicturesInput = styled.div`
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  padding: 15px;
  font-style: italic;
  margin: 20px 0;
  flex-grow: 1;
  background-color: ${(props) => props.theme.input.backgroundColor.primary};
  border-radius: ${props => props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.text.main};

`
