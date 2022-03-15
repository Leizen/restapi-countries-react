import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme{
        name: string;
        colors: {
            text: string;
            secondary: string;
            elements: string;
            backgroundColor: string;
        }
    }
}