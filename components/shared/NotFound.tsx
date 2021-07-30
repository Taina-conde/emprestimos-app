import styled from "styled-components";
import Link from 'next/link';

export default function NotFound() {
    return (<Wrapper>
        <Error>
            404
        </Error>
        <span>
            Não Encontrado
        </span>
        <span>
            <Link href = "/">
                <HomeLink>voltar para a página principal</HomeLink>
            </Link>
        </span>
        
    </Wrapper>

    )
}

const Wrapper = styled.div`
color: ${props => props.theme.colors.text.main};
    font-size: 25px;
    height: 300px;
    width: 100%;
    border-radius: ${props => props.theme.input.borderRadius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background.primary};

`
const Error = styled.span`
    font-size: 70px;
`
const HomeLink = styled.a`
    color: ${props => props.theme.colors.primary.dark};
    text-decoration: underline;
`