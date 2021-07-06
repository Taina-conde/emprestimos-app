import styled from "styled-components";

const SecondaryButton = styled.button`
  height: 53px;
  width: 160px;
  font-size: 22px;
  text-align: center;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary.main};
  color: ${(props) => props.theme.colors.text.secondary};
  text-transform: capitalize;
  border-radius: ${(props) => props.theme.input.borderRadius};
 
`;
export default SecondaryButton;