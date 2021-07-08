import styled from "styled-components";

interface InputProps {
  readonly border: string;
  readonly append?: boolean;
}
const Input = styled.input<InputProps>`
  border: ${(props) => props.border || "none"};
  padding: 10px;
  text-align: center;
  height: 42px;
  font-size: 30px;
  flex-grow: 2;
  background-color: ${(props) => props.theme.input.backgroundColor.primary};
  border-radius: ${(props) =>
    props.append
      ? `${props.theme.input.borderRadius} 0 0 ${props.theme.input.borderRadius}`
      : props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.text.main};
`;
export default Input;
