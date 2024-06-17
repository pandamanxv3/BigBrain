import styled from "styled-components";

const MainIllustrationContainer = styled.div<{ navBarHeight: number }>`
  display: flex;
  transform: translate(0%, 0%);
  justify-content: center;
  align-items: center;
  width: 70dvw;
  height: 48dvw;
  
  background-color: #1a1717;
  border-radius: 10px;
  margin: ${({ navBarHeight }) => navBarHeight}px auto 0 auto;

  @media (max-width: 768px) {
    width: 100vw;
	transform: translate(0%, 0%);
  }
`;

const MainTitle = styled.div`
  position: absolute;
  top: 18%;
  transform: translate(0%, -50%);
  font-size: 13dvw;
  color: var(--main-bg-color);
  font-family: "PPEditorialOld";
`;

const TitleImg = styled.img`
  position: absolute;
  top: 10dvw;
  width: 42dvw;
  height: auto;
  transition: transform 0.3s ease , filter 0.5s ease;

  transform: translate(0%, 0%);

  &:hover {
	transform: scale(1.1);
	filter : hue-rotate(-190deg);
  }
`;

const MainText = styled.p`
  position: absolute;
  bottom: 10%;
  transform: translate(0%, 50%);
  font-size: max(1.5vw, 18px);
  color: var(--main-bg-color);
  font-family: "PPEditorialOld";
  text-align: center;
  width: 80%;
  z-index: 1;
`;

const HighlightedText = styled.span`
  background-color: #1a1717; 
  display: inline;
  padding: 0 10px; 
  line-height: 1.1;
`;
const IllustrationImgMoto = styled.img`
  position: absolute;
  top: 0%;
  right: 50%;
  transform: translate(50%, 100%);
  width: 50dvw;
  height: auto;
  transition: transform 0.5s ease-in-out;


&:hover {
  transform:  translate(50%, 100%) scale(0.98);
}
`;

const ModelIllustration = styled.img`
  position: absolute;
  top: 0%;
  right: 8%;
  transform: translate(50%, 160%);
  width: 15dvw;
  height: auto;
  z-index: -1;
  transition: transform 0.5s ease-in-out;


&:hover {
  transform:  translate(50%, 160%) scale(0.98);
}
`;

const BagIllustration = styled.img`
  position: absolute;
  top: 0%;
  left: 8%;
  transform: translate(-50%, 70%);
  width: 15dvw;
  height: auto;
  z-index: 1;

  transition: transform 0.5s ease-in-out;


&:hover {
  transform:  translate(-50%, 70%) scale(0.98);
}
`;

export const MainIllustration: React.FC<{ navBarHeight: number }> = ({
  navBarHeight,
}) => {
  return (
    <MainIllustrationContainer navBarHeight={navBarHeight}>
      <MainTitle>BIG BRAIN</MainTitle>
      <TitleImg src="/BigBrain3d.png" />
      <IllustrationImgMoto src="/MotoIllustration.png" />
      <ModelIllustration src="/ModelIllustration.png" />
      <BagIllustration src="/BagIllustration.png" />
      <MainText>
        <HighlightedText>
          Chez Big Brain, nous réinventons la communication avec une esthétique
          avant-gardiste et des idées audacieuses. Notre équipe créative
          transforme chaque projet en une expérience visuelle unique, propulsant
          votre marque au sommet avec style et innovation.
        </HighlightedText>
      </MainText>
    </MainIllustrationContainer>
  );
};
