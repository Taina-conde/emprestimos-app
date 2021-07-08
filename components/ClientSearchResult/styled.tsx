import styled from "styled-components";
import PrimaryButton from "../shared/PrimaryButton";

export const Wrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const ClientBox = styled.div`
  margin: 50px auto;
  text-align: center;
  width: 473px;
  height: 355px;
  background-color: ${(props) => props.theme.input.backgroundColor.primary};
  border-radius: ${(props) => props.theme.input.borderRadius};
  color: ${(props) => props.theme.colors.text.main};
  padding: 10px;
  font-size: 33px;
`;
export const ClientCpf = styled.div`
  color: ${(props) => props.theme.colors.secondary.main};
`;
export const ClientName = styled.div`
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.primary.main};
`;
export const ClientNotFound = styled.div`
  font-style: italic;
`;
