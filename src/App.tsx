import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled, { ThemeProvider } from "styled-components";
import Corn from "./components/corn";
import Footer from "./components/footer";
import Header from "./components/header";
import About from "./components/section/about";
import Information from "./components/section/infornation/Information";
import Project from "./components/section/project";
import Skill from "./components/section/skill";
import { GlobalContext } from "./GlobalState";
import { dark, light } from "./themes";

const Container = styled.div`
  background-image: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  overflow: hidden;
  position: relative;
  z-index: 0;

  &:before {
    content: "";
    width: 200vw;
    height: 900px;
    position: fixed;
    bottom: -70%;
    right: -95%;
    border-radius: 50%;
    z-index: -10;
    background: ${(props) => props.theme.waveBg};
    animation: wavebefore 6s ease-in-out infinite alternate;
  }

  &:after {
    content: "";
    width: 200vw;
    height: 900px;
    position: fixed;
    bottom: -70%;
    right: -65%;
    border-radius: 50%;
    z-index: -10;
    background: ${(props) => props.theme.waveBg};
    animation: waveafter 4s ease-in-out infinite alternate;
  }

  @keyframes wavebefore {
    from {
      bottom: -70%;
      right: -95%;

      transform: skewY(-8deg);
    }
    to {
      bottom: -60%;
      right: -75%;
      transform: skewY(-8deg);
    }
  }

  @keyframes waveafter {
    from {
      bottom: -70%;
      right: -55%;
    }
    to {
      bottom: -60%;
      right: -85%;
    }
  }
`;

const Body = styled.div`
  min-height: 100vh;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 0 2rem;

  @media (max-width: 60rem) {
    padding: 0 1rem;
  }
`;

function App() {
  const { isTheme, isTranslate } =
    useContext<GlobalContextProps>(GlobalContext);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (isTranslate.isToggleTranslate) {
      i18n.changeLanguage("vi");
    } else {
      i18n.changeLanguage("en");
    }
  }, [isTranslate.isToggleTranslate, i18n]);

  return (
    <ThemeProvider theme={isTheme.isToggleTheme ? dark : light}>
      <Container id="app">
        <Body>
          <Header />
          <Information />
          <Skill />
          <Project />
          <About />
          <Footer />
        </Body>
        <Corn />
      </Container>
    </ThemeProvider>
  );
}

export default App;
