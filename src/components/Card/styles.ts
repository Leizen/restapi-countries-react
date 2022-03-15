import styled from 'styled-components'

export const Container = styled.a`
    width: 20rem;
    height: 24rem;
    border: none;
    background: ${props => props.theme.colors.elements};
    justify-self: center;
    border-radius: 0.5rem;

    @media (max-width: 700px) { 
        width: 25rem;
        height: 29rem;
    }
`

export const Flag = styled.div`
    width: 100%;
    height: 50%;
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        border-radius: 0.5rem 0.5rem 0 0 ;
    }

    &:hover{
        cursor: pointer;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    padding: 1rem 2rem;
    
    h2{
        padding: 0.5rem 0;
    }

    p{
        margin-top: 0.25rem;
    }
`