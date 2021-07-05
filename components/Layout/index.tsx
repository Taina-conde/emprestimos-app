import Head from "next/head";
import styled from "styled-components";

const StyledLayout = styled.div``;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StyledLayout>
      <Head>
        <meta
          name="description"
          content="Solicite empréstimos"
        />
        <meta
          property="og:image"
          content={}
        />
        <meta name="og:title" content="Klutch Tecnologia" />
      </Head>
      <main>{children}</main>
    </StyledLayout>
  );
}
