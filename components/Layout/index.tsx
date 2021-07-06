import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import klutchLogo from "../../assets/icons/Grupo 290.svg";
const Container = styled.div``;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary.main};
  height: 60px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLogo = styled.div`
  flex-grow: 2;
  text-align: center;
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
          <IoMdMenu size={40} color="white" />

          <StyledLogo>
            <Image src={klutchLogo} alt="Klutch Tecnologia" />
          </StyledLogo>
        </Nav>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
