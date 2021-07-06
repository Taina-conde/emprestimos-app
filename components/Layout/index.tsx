import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";
import klutchLogo from "../../assets/icons/Grupo 290.svg";
import plusIcon from "../../assets/icons/Grupo 270.svg";
import foldersIcon from "../../assets/icons/foldersIcon.svg";

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 30px;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 65%;
  }
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.primary.main};
  height: 60px;
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  flex-grow: 2;
  text-align: center;
`;
const HeaderTitle = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 56px;
  width: 285px;
  margin-left: 20px;
`;

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
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
          <Logo>
            <Image src={klutchLogo} alt="Klutch Tecnologia" />
          </Logo>
        </Nav>
        <Container>
          <Header>
            {title !== "Detalhe de Solicitação" && (
              <Image src={plusIcon} alt="Plus icon" width={67} height={84} />
            )}
            <Image
              src={foldersIcon}
              alt="Folders icon"
              width={115}
              height={115}
            />
            <HeaderTitle>{title}</HeaderTitle>
          </Header>
          {children}
        </Container>
      </main>
    </div>
  );
}
