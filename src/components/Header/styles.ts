import styled from 'styled-components'

export const Container = styled.div`
    height: 6rem;
    background: var(--dark-mode-text-light-mode-elements);
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    height: 100%;
`

export const DarkMode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 15px;
        height: 15px;
        margin-right: 0.5rem;
    }
`