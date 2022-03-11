import styled from 'styled-components'

export const Container = styled.div`
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 6rem;
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
        background: var(--dark-mode-text-light-mode-elements)
    }
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    height: 3rem;
    width: 30rem;
    border-radius: 0.25rem;
    background: var(--dark-mode-text-light-mode-elements);

    img {
        width: 20px;
        height: 20px;
        margin-left: 1rem;
    }

    input {
        border: none;
        height: 3rem;
        width: 30rem;
        margin-left: 1rem;
        font-size: 1rem;

        :focus{
            outline: none;
        }
    }
`

export const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8rem;
    width: 100%;
`

