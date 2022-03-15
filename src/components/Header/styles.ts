import styled from 'styled-components'

export const Container = styled.div`
    height: 6rem;
    background: ${props => props.theme.colors.elements};
`
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    height: 100%;
    @media (max-width: 700px) { 
        padding: 0 1rem;
    }
`

export const DarkMode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 15px;
        height: 15px;
        margin-right: 0.5rem;

        filter: ${props => props.theme.name === "dark" ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)" : ''}
    }

    &:hover{
        cursor: pointer;
    }
`