import styled from 'styled-components';
import SecondaryButton from '../shared/SecondaryButton';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
export const Table = styled.table`
color: ${props => props.theme.colors.text.main};
width: 100%;
border: 1px solid #E6E6E6;
background-color: ${props => props.theme.input.backgroundColor.primary};
border-radius: 0px 5px 5px 5px;
`
export const TableTitle = styled.h3`
 color: ${props => props.theme.colors.primary.main};
 font-size: 29px;
 width: 100%;
`
export const Tr = styled.tr`
th:last-child, td:last-child {
    border: none;
}


`
export const Th = styled.th`
font-size: 25px;
font-weight: bold;
border-right: 1px solid #E6E6E6;
padding: 10px;
margin: 0;

`
export const Td = styled.td`

`
export const Button = styled(SecondaryButton)`


`
export const FixedBar = styled.div`
width: 100%;
background-color: ${props => props.theme.colors.primary.main};
height: 86px;
position: fixed;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-around;
`
export const Text = styled.span`
 font-size: 30px;
 color: ${props => props.theme.colors.text.secondary};
`