import styled from "styled-components";

const OfferItemContainer = styled.div`
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin: 20px;
`;

const OfferImage = styled.img`
  width: 100%;
  height: auto;
`;

const OfferContent = styled.div`
  padding: 20px;
`;

const OfferTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffffff;
  text-align: center;
  font-family: "PPEditorialOld";
`;

const OfferDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #bbbbbb;
  text-align: center;
  font-family: "OldSchoolGrotesk";
`;

const BulletPoints = styled.ul`
  list-style: disc;
  padding-left: 20px;
  color: #bbbbbb;
  font-size: 14px;
`;

const BulletPoint = styled.li`
  margin: 5px 0;
`;

const OfferButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto 20px;
  padding: 10px 20px;
  color: #0c0b0b;
  background-color: #ce945e;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  font-family: "OldSchoolGroteskCondensed";
  font-size: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
  }
`;

interface OfferItemProps {
  image: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export const OfferItem = ({ image, title, description, bulletPoints }: OfferItemProps) => {
  return (
    <OfferItemContainer>
      <OfferImage src={image} alt="Offer Image" />
      <OfferContent>
        <OfferTitle>{title}</OfferTitle>
        <OfferDescription>{description}</OfferDescription>
        <BulletPoints>
          {bulletPoints.map((point, index) => (
            <BulletPoint key={index}>{point}</BulletPoint>
          ))}
        </BulletPoints>
        <OfferButton href="#">En savoir plus</OfferButton>
      </OfferContent>
    </OfferItemContainer>
  );
};
