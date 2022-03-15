import styled from 'styled-components'

export const Container = styled.div`
    @media (max-width: 700px) { 
        padding: 0 1rem;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 0 6rem;

    @media (max-width: 700px) { 
        padding: 0 1rem;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 10rem;
    width: 100%;

    @media (max-width: 700px) { 
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin: 2rem 0;
        padding: 0 1rem;
        height: 4rem;
    }
`

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 3rem;
    width: 8rem;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    background: ${props => props.theme.colors.elements};

    img{
        width: 25px;
        height: 25px;
        margin: 1rem;
        filter: ${props => props.theme.name === "dark" ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" : ''}

    }

    transition: filter 0.1s;

    &:hover {
      filter: opacity(0.6);
    }
`
export const About = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 30rem;
    width: 100%;

    @media (max-width: 700px) { 
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        width: 100%;
    }
`

export const Flag = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 80%;
    height: 100%;
    
    img{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

@media (max-width: 700px) { 
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 2rem;
    
`

export const InfoHeader = styled.div`
    height: 20%;
    width: 100%;
`

export const InfoDescription = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    height: 60%;
    width: 100%;

    @media (max-width: 700px) { 
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        width: 100%;
    }
`

export const Span = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: 1rem;
    p{
        margin-left: 0.25rem;
    }

    
`

export const LeftDescritpion = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;

`
export const RightDescription = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    margin-left: 4rem;

    @media (max-width: 700px) { 
        margin-top: 2rem;
        margin-left: 0;
    }
`

export const FooterDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    height: 10%;
    width: 100%;

    @media (max-width: 700px) { 
        display: none;
    }
`

export const BorderList = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left: 1rem;

    
`

export const SpanFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 1.5rem;
    margin-left: 1rem;
    background: ${props => props.theme.colors.elements};
    border-radius: 0.25rem;

    @media (max-width: 700px) { 
        margin-top: 1rem;
        width: 6rem;
        height: 2.5rem;
    }
`