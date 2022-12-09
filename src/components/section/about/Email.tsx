import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "../../common/Button";

type Props = {};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontmd};
    color: #0284c7;
    letter-spacing: 2px;
  }
  p {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontxl};
  }

  h6 {
    width: 75%;
    text-align: center;
    font-size: ${(props) => props.theme.fontlg};
    font-weight: normal;

    @media (max-width: 40rem) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Email = (props: Props) => {
  const { t } = useTranslation("", { keyPrefix: "about.email" });

  return (
    <div data-aos="zoom-in-up">
      <Container>
        <h3>{t("title")}</h3>
        <p>{t("text")}</p>
        <h6>{t("description")}</h6>
        <a href="mailto:vmtruc060500@gmail.com">
          <Button text={t("button")}>
            <span className="material-symbols-sharp">mail</span>
          </Button>
        </a>
      </Container>
    </div>
  );
};

export default Email;
