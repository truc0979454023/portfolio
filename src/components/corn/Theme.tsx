import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalState";

type Props = {};

const Container = styled.div<{ isTheme: boolean }>`
  background: transparent;
  height: 2.5rem;
  width: 2.5rem;
  cursor: pointer;
  text-shadow: 0 0 10px ${(props) => props.theme.text};

  span {
    width: 100%;
    height: 100%;
    font-size: 2.5rem;
    transform: rotate(-45deg);
    color: ${(props) => props.theme.text};
  }
`;

const Theme = (props: Props) => {
  const { isTheme } = useContext<GlobalContextProps>(GlobalContext);

  return (
    <Container
      isTheme={isTheme.isToggleTheme}
      onClick={() => isTheme.setIsToggleTheme(!isTheme.isToggleTheme)}
    >
      {isTheme.isToggleTheme ? (
        <span className="material-symbols-sharp">brightness_high</span>
      ) : (
        <span className="material-symbols-sharp">nightlight</span>
      )}
    </Container>
  );
};

export default Theme;
