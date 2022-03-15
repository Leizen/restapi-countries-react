import styled from 'styled-components'

export const Container = styled.div`

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 6rem;

    @media (max-width: 700px) { 
        padding: 0 1rem;
    }
`

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 8rem;
    width: 100%;


    select{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 12rem;
        padding: 0 0.5rem;
        border-radius: 0.25rem;
        border: none;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.elements};
        @media (max-width: 700px) { 
            margin-top: 2rem;
        }
        
    }

    @media (max-width: 700px) { 
        flex-direction: column;
        align-items: start;
        justify-content: center;
        margin: 2rem 0;
        padding: 0 1rem;
    }
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    width: 30rem;
    border-radius: 0.25rem;
    
    background: ${props => props.theme.colors.elements};

    img {
        width: 20px;
        height: 20px;
        margin-left: 1rem;
        filter: ${props => props.theme.name === "dark" ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" : ''}

    }

    input {
        border: none;
        height: 3rem;
        width: 30rem;
        margin-left: 1rem;
        font-size: 1rem;
        ::placeholder{
            color: ${props => props.theme.colors.text};
        }
        background: ${props => props.theme.colors.elements};

        :focus{
            outline: none;
        }
    }

    @media (max-width: 700px) { 
        width: 30rem;
    }
`

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8rem;
    width: 100%;

    @media (max-width: 700px) { 
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        width: 100%;
    }
`

