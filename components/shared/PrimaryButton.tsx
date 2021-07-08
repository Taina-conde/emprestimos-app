import styled from "styled-components";

const PrimaryButton = styled.button`
  height: 53px;
  width: 160px;
  font-size: 22px;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: capitalize;
  border-radius: ${(props) => props.theme.input.borderRadius};
 
`;
export default PrimaryButton;