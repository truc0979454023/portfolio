import GitHubIcon from "@mui/icons-material/GitHub";

import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { projects } from "../../../data";
import Button from "../../common/Button";
import ProjectItem from "./ProjectItem";

type Props = {};

const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 60rem) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const SwiperContainer = styled.div`
  margin-bottom: 2rem;

  .swiper {
    position: unset;
  }

  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 4rem;
    top: 2rem;
    position: absolute;

    @media (max-width: 40rem) {
      right: 1rem;
    }
    @media (max-width: 28rem) {
      right: 0;
    }

    &:after {
      @media (max-width: 28rem) {
        font-size: ${(props) => props.theme.fontlg};
      }
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 10rem;
    left: unset !important;
    top: 2rem;
    position: absolute;

    @media (max-width: 40rem) {
      right: 5rem;
    }

    @media (max-width: 28rem) {
      right: 3rem;
    }

    &:after {
      @media (max-width: 28rem) {
        font-size: ${(props) => props.theme.fontlg};
      }
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  .swiper-pagination-fraction {
    width: fit-content;
    top: 1rem;
    right: 7rem;
    left: unset !important;
    transform: translate(12px);
    height: fit-content;
    font-size: ${(props) => props.theme.fontlg};

    @media (max-width: 40rem) {
      right: 3rem;
    }

    @media (max-width: 28rem) {
      right: 1.5rem;
      font-size: ${(props) => props.theme.fontsm};
      transform: translateY(7px) translateX(3px);
    }
  }
`;

const ButtonContainer = styled.div`
  align-self: center;
`;

function Project(props: Props) {
  const { t } = useTranslation("", { keyPrefix: "project" });
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <Container>
        <h2>{t("title")}</h2>
        <SwiperContainer>
          <Swiper
            navigation={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            scrollbar={{
              draggable: true,
            }}
            pagination={{
              type: "fraction",
            }}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectItem project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
        <ButtonContainer>
          <a href="https://github.com/truc0979454023" target="_brank">
            <Button text={t("button")}>
              <GitHubIcon />
            </Button>
          </a>
        </ButtonContainer>
      </Container>
    </div>
  );
}

export default Project;
