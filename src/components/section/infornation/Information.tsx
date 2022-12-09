import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../../common/Button";
import Avatar from "./Avatar";

type Props = {};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  @media (max-width: 60rem) {
    padding: 0 0 2rem 0;
  }
`;

const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

const AvatarBox = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0px 20px ${(props) => props.theme.text};
`;

const Intro = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 60rem) {
    flex-direction: column-reverse;
  }
`;

const IntroText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 40rem) {
    gap: 0.25rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxl};

    @media (max-width: 40rem) {
      font-size: ${(props) => props.theme.fontlg};
    }

    @media (max-width: 28rem) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontxxl};
    display: inline-block;
    height: 100%;
    height: 3rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    @media (max-width: 40rem) {
      font-size: ${(props) => props.theme.fontxl};
    }

    @media (max-width: 28rem) {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
  p {
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => `rgba(${props.theme.textRgba},0.6)`};

    @media (max-width: 28rem) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Information = (props: Props) => {
  const { t } = useTranslation("", { keyPrefix: "intro" });

  const element: HTMLElement = document.getElementById("skill") as HTMLElement;

  const scroll = () => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Container>
      <Intro>
        <div
          style={{ flex: 1 }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <TextBox>
            <IntroText>
              <h3>{t("text")}</h3>

              <h2>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`${t("name")}`)
                      .pauseFor(4000)
                      .deleteAll()
                      .typeString(`${t("major")}`)
                      .pauseFor(4000)
                      .deleteAll()
                      .start();
                  }}
                />
              </h2>
              <p>{t("description")}</p>
            </IntroText>
            <Button text={t("button")} onClick={scroll} />
          </TextBox>
        </div>

        <div data-aos="zoom-in-down" data-aos-duration="500">
          <AvatarBox>
            <Avatar />
          </AvatarBox>
        </div>
      </Intro>
    </Container>
  );
};

export default Information;
