import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "../../common/Button";

type Props = {};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 60rem) {
    flex-direction: column;
  }
`;

const LeftBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h3 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontmd};
    color: #0284c7;
    letter-spacing: 2px;
  }
  p {
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
  }
`;

const RightBox = styled.div`
  width: 100%;
  letter-spacing: 1px;
  font-size: ${(props) => props.theme.fontlg};

  @media (max-width: 40rem) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Connect = (props: Props) => {
  const { t } = useTranslation("", { keyPrefix: "about.connect" });

  return (
    <Container>
      <div style={{ width: "100%" }} data-aos="flip-left">
        <LeftBox>
          <h3>{t("title")}</h3>
          <p>{t("text")}</p>

          <a href="tel:0868746051">
            <Button text="086-874-6051">
              <span className="material-symbols-sharp">call</span>
            </Button>
          </a>
        </LeftBox>
      </div>

      <div style={{ width: "100%" }} data-aos="flip-right">
        <RightBox>{t("description")}</RightBox>
      </div>
    </Container>
  );
};

export default Connect;
