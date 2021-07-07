import styled from "styled-components";
import SecondaryButton from "../shared/SecondaryButton";

export const Form = styled.form`
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
  
  border: 1px solid #e6e6e6;

    
`;
export const TableBody = styled.tbody`

`;
export const Tr = styled.tr`
border: 1px solid #e6e6e6;
  th:last-child,
  td:last-child {
    border: none;
  }
`;
export const Th = styled.th`
  font-size: 25px;
  font-weight: bold;
  border-right: 1px solid #e6e6e6;
  padding: 10px;
  margin: 0;
`;
export const Td = styled.td`
background-color: ${props => props.theme.colors.background};
padding: 15px;
text-align: center;
font-size: 23px;



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
