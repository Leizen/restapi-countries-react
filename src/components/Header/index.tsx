import { Container, Content, DarkMode } from "./styles";
import darkModeIcon from "../../assets/dark-mode.png";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface HeaderProps {
  handleSetTheme: () => void;
}

export function Header({ handleSetTheme }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>Where in the world?</h1>
        <DarkMode onClick={handleSetTheme}>
          <img src={darkModeIcon} alt="Dark Mode" />
          <p>Dark Mode</p>
        </DarkMode>
      </Content>
    </Container>
  );
}
