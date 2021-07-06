import styled from 'styled-components';

export const Table = styled.table`
width: 100%;
border: 1px solid #E6E6E6;
background-color: ${props => props.theme.input.backgroundColor.primary};
`
export const TableTitle = styled.h3`
 color: ${props => props.theme.colors.primary.main};
 font-size: 29px;
 text-align: center;
`
export const Tr = styled.tr`

`
export const Th = styled.th`
font-size: 25px;
font-weight: bold;
border: 1px solid #E6E6E6;

`
export const Td = styled.td`

`