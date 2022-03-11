import { Container, Content, DarkMode } from "./styles";
import darkModeIcon from "../../assets/dark-mode.png";

export function Header() {
  return (
    <Container>
      <Content>
        <h1>Where in the world?</h1>
        <DarkMode>
          <img src={darkModeIcon} alt="Dark Mode" />
          <p>Dark Mode</p>
        </DarkMode>
      </Content>
    </Container>
  );
}
