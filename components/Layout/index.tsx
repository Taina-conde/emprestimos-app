import Head from "next/head";
import styled from "styled-components";

const Container = styled.div``;

const Nav = styled.nav``;

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
          
        </Nav>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
