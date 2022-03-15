import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --dark-mode-elements: hsl(209, 23%, 22%);
    --dark-mode-background: hsl(207, 26%, 17%);
    --light-mode-text: hsl(200, 15%, 8%);
    --light-mode-background: hsl(0, 0%, 90%);
    --dark-mode-text-light-mode-elements: hsl(0, 0%, 100%);
}
    * {
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media(max-width: 1080px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background: ${props => props.theme.colors.backgroundColor};
        
    }

    p, span, button {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 600;
        color: ${props => props.theme.colors.text};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 800;
        color: ${props => props.theme.colors.text};
    } 

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

   
`;
