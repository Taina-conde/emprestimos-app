import styled from 'styled-components';

const StyledLayout = styled.div``;


export default function Layout({ children } : {children: React.ReactNode}) {
  return <StyledLayout>{children}</StyledLayout>;
}

