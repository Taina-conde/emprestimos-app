import { NOTFOUND } from "dns";
import styled from "styled-components";
import Link from 'next';

export default function NotFound() {
    return (<Wrapper>
        <span>
            404
        </span>
        <span>
            Não Encontrado
        </span>
        <span>
            <Link>
            
            </Link>
        </span>
        
    </Wrapper>

    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background.primary};

`