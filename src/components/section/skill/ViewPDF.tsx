import { usePdf } from "@mikecousins/react-pdf";
import { useRef, useState } from "react";
import styled from "styled-components";
import cv from "../../../assets/vuongminhtruc_cv.pdf";

type Props = {
  onClose: () => void;
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 20;
  padding: 6rem 0;
  height: 100%;

  button {
    span {
      color: #2563eb;
    }
  }

  canvas {
    padding: 2rem 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100% !important;
    object-fit: contain;
  }
`;

const ButtonLeft = styled.button`
  position: fixed;
  left: 8em;
  top: 50%;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: 60rem) {
    left: 4rem;
  }

  @media (max-width: 40rem) {
    left: 2rem;
  }

  @media (max-width: 28rem) {
    left: 2px;
  }

  span {
    font-size: ${(props) => props.theme.fontxxxl};
    color: ${(props) => props.theme.text};
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.2);
      color: #0284c7;
    }
  }
`;

const ButtonRight = styled.button`
  position: fixed;
  right: 8rem;
  top: 50%;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: 60rem) {
    right: 4rem;
  }

  @media (max-width: 40rem) {
    right: 2rem;
  }

  @media (max-width: 28rem) {
    right: 2px;
  }

  span {
    font-size: ${(props) => props.theme.fontxxxl};

    color: ${(props) => props.theme.text};
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.2);
      color: #0284c7;
    }
  }
`;

const ButtonClose = styled.button`
  position: fixed;
  right: 4rem;
  top: 1rem;
  outline: none;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  span {
    font-size: ${(props) => props.theme.fontxxxl};

    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.2);
      color: #b91c1c;
    }
  }
`;

const Pagination = styled.p`
  position: fixed;
  top: 2rem;
  left: 25%;
  transform: translateX(-50%);

  font-size: ${(props) => props.theme.fontxl};
  color: #2563eb;
`;

const ViewPDF = ({ onClose }: Props) => {
  const [page, setPage] = useState<number>(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { pdfDocument } = usePdf({
    file: cv,
    page,
    canvasRef,
  });

  return (
    <Container>
      {!pdfDocument && <span>Loading...</span>}
      <canvas ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <>
          <ButtonLeft
            disabled={page === 1}
            onClick={() => setPage((page) => page - 1)}
          >
            <span className="material-symbols-sharp">arrow_back_ios_new</span>
          </ButtonLeft>

          <ButtonRight
            disabled={page === pdfDocument?.numPages}
            onClick={() => setPage((page) => page + 1)}
          >
            <span className="material-symbols-sharp">arrow_forward_ios</span>
          </ButtonRight>
          <Pagination>
            {page}/ {pdfDocument?.numPages}
          </Pagination>
        </>
      )}
      <ButtonClose onClick={onClose}>
        <span className="material-symbols-sharp">close</span>
      </ButtonClose>
    </Container>
  );
};

export default ViewPDF;
