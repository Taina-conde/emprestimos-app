import styled from "styled-components";
import Link from 'next/link';

export default function NotFound() {
    return (<Wrapper>
        <span>
            404
        </span>
        <span>
            Não Encontrado
        </span>
        <span>
            <Link href = "/">
                <a>voltar para a página principal</a>
            </Link>
        </span>
        
    </Wrapper>

    )
}

const Wrapper = styled.div`
    font-size: 25px;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background.primary};

`