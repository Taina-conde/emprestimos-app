import styled from "styled-components";

interface ButtonProps {
  readonly disabled: boolean;
}
const PrimaryButton = styled.button<ButtonProps>`
  height: 53px;
  width: 160px;
  font-size: 22px;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.primary.main};
  opacity: ${(props) => (props.disabled ? props.theme.input.opacity : 1)};
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: capitalize;
  border-radius: ${(props) => props.theme.input.borderRadius};
`;
export default PrimaryButton;
