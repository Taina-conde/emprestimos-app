import styled from "styled-components";
import SecondaryButton from "../shared/SecondaryButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  table:last-of-type {
    padding-bottom: 150px;
  }
`
export const Button = styled(SecondaryButton)``;
export const FixedBar = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary.main};
  height: 86px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Text = styled.span`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text.secondary};
`;
