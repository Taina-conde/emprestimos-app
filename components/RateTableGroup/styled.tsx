import styled from "styled-components";
import SecondaryButton from "../shared/SecondaryButton";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
export const Table = styled.table`
  color: ${(props) => props.theme.colors.text.main};
  width: 100%;
  border-radius: 0px 5px 5px 5px;
`;
export const TableTitle = styled.caption`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 29px;
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
  display: table-caption;
`;
export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.input.backgroundColor.primary};
`;
export const TableBody = styled.tbody`
  tr:hover {
    background-color: ${(props) => props.theme.input.backgroundColor.secondary};
  }
`;
export const Tr = styled.tr`
  td:first-child,
  th:first-child {
    border-left: 1px solid #e6e6e6;
  }
`;
export const Th = styled.th`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
  margin: 0;
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;
export const Td = styled.td`
  background-color: transparent;
  padding: 15px;
  text-align: center;
  font-size: 23px;
  border-right: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;
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
