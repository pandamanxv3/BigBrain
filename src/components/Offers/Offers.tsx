import React from "react";
import styled from "styled-components";
import { OfferItem } from "./components/OfferItem";

const OffersContainer = styled.div`
  width: 70%;
  margin: 10px auto;
  background-color: var(--main-bg-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OfferList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const OurOffersImg = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  transition: transform 0.3s ease, filter 0.5s ease;
  &:hover {
    transform: scale(0.95);
    filter: hue-rotate(-190deg);
  }
`;

const Offers: React.FC = () => {
  const offerData = [
    {
      image: "/illu2.png",
      title: "Stratégie de Marque",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      bulletPoints: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Integer nec odio",
      ],
    },
    {
      image: "/illu1.png",
      title: "Design Créatif",
      description:
        "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
      bulletPoints: [
        "Sed cursus ante dapibus diam",
        "Sed nisi nulla quis sem",
        "Duis sagittis ipsum",
      ],
    },
    {
      image: "/illu3.png",
      title: "Marketing Digital",
      description:
        "Libero ultricies, sit amet risus dignissim, luctus elit. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
      bulletPoints: [
        "Praesent mauris fusce",
        "Nec tellus sed augue",
        "Semper libero",
      ],
    },
  ];

  return (
    <OffersContainer>
      <OurOffersImg src="/NosOffres3d.png" alt="our offers" />
      <OfferList>
        {offerData.map((offer, index) => (
          <OfferItem
            key={index}
            image={offer.image}
            title={offer.title}
            description={offer.description}
            bulletPoints={offer.bulletPoints}
          />
        ))}
      </OfferList>
    </OffersContainer>
  );
};

export default Offers;
