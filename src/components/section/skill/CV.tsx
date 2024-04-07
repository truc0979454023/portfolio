import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import pdfimage from "../../../assets/images/pdf.png";
import cv from "../../../assets/FRONTEND - CV - VUONG MINH TRUC.pdf";
import Button from "../../common/Button";
import ViewPDF from "./ViewPDF";
import { skillData } from "../../../data";

type Props = {};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;

  @media (max-width: 60rem) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontmd};
    color: #0284c7;
    letter-spacing: 2px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 600;
    text-transform: capitalize;

    @media (max-width: 40rem) {
      font-size: ${(props) => props.theme.fontlg};
    }
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
`;

const PagePDF = styled.button`
  width: 100%;
  height: 100%;
  border: 2px dashed ${(props) => props.theme.text};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: transparent;
  cursor: pointer;

  img {
    width: 20rem;
  }
`;

const CV = (props: Props) => {
  const { t } = useTranslation("", { keyPrefix: "skill.CV" });

  const [isShowFile, setIsShowFile] = useState(false);

  const onButtonClick = () => {
    fetch(cv).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "FRONTEND - CV - VUONG MINH TRUC.pdf";
        alink.click();
      });
    });
  };

  return (
    <Container>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <TextBox>
          <h3>{t("title")}</h3>
          <Skill>
            {skillData.map((data) => (
              <p>{data}</p>
            ))}
          </Skill>

          <Button text={t("button")} onClick={onButtonClick}>
            <span className="material-symbols-sharp">download</span>
          </Button>
        </TextBox>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="linear"
        data-aos-duration="400"
        style={{ flex: 1 }}
      >
        <Box>
          <PagePDF onClick={() => setIsShowFile(true)}>
            <img src={pdfimage} alt="" />
          </PagePDF>
        </Box>
      </div>
      {isShowFile && <ViewPDF onClose={() => setIsShowFile(false)} />}
    </Container>
  );
};

export default CV;
