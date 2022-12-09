import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalState";

type Props = {};

const Container = styled.button`
  color: ${(props) => props.theme.text};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 0.25rem;
  text-shadow: 0 0 10px ${(props) => props.theme.text};

  span {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.text};
  }
`;

const ChangeLanguageButton = (props: Props) => {
  const { isTranslate } = useContext<GlobalContextProps>(GlobalContext);
  return (
    <Container
      onClick={() =>
        isTranslate.setIsToggleTranslate(!isTranslate.isToggleTranslate)
      }
    >
      <h3>{isTranslate.isToggleTranslate ? "EN" : "VI"}</h3>
      <span className="material-symbols-sharp">g_translate</span>
    </Container>
  );
};

export default ChangeLanguageButton;
