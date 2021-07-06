import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { IoMdMenu } from 'react-icons/io';
import klutchLogo from '../../assets/icons/Grupo 290.svg'
const Container = styled.div``;

const Nav = styled.nav`
background-color: ${props => props.theme.colors.primary.main};
 

`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>Klutch Tecnologia</title>
        <meta name="description" content="Solicite empréstimos" />
        <meta name="og:title" content="Klutch Tecnologia" />
      </Head>
      <main>
        <Nav>
          <IoMdMenu/>
          <Image src = {klutchLogo} alt = 'Klutch Tecnologia'/>

          
          
        </Nav>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
