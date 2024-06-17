import styled from "styled-components";
import TestimonialItem from "./components/TestimonialItem";

const TestimonialsContainer = styled.div`
  width: 70dvw;
  margin: 50px auto;
  background-color: #1a1717;
  border-radius: 10px;
  padding: 100px 20px;
  margin-bottom: -50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ClientsTestimonials: React.FC = () => {
  const testimonialsData = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      author: "Adidas"
    },
    {
      text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
      author: "LVMH"
    },
    {
      text: "Libero ultricies, sit amet risus dignissim, luctus elit. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.",
      author: "ONF"
    },
	{
	  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
	  author: "Nike"
	},
	{
	  text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper.",
	  author: "Apple"
	},
  ];

  return (
    <TestimonialsContainer>
      <TestimonialsList>
        {testimonialsData.map((testimonial, index) => (
          <>
            <TestimonialItem
              key={index}
              text={testimonial.text}
              author={testimonial.author}
            />
            <div key={`empty-${index}`} />
          </>
        ))}
      </TestimonialsList>
    </TestimonialsContainer>
  );
};

export default ClientsTestimonials;
