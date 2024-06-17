import styled from "styled-components";

const TestimonialItemContainer = styled.div`
  font-family: "OldSchoolGrotesk";
  position: relative;
  padding-left: 20px;
  &:before {
    content: "“";
    font-size: 80px;
    color: #e7e7e7;
    position: absolute;
    left: 0;
    top: -10px;
  }
  &:after {
    content: "”";
    font-size: 80px;
    color: #e7e7e7;
    position: absolute;
    right: 0;
    bottom: -30px;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: #e7e7e7;
  padding: 0 20px;
`;

const TestimonialAuthor = styled.div`

  font-size: 14px;
  color: #555;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
`;

interface TestimonialItemProps {
	  text: string;
	  author: string;
}

const TestimonialItem = ({ text, author } : TestimonialItemProps) => {
  return (
    <TestimonialItemContainer>
      <TestimonialText>{text}</TestimonialText>
      <TestimonialAuthor>{author}</TestimonialAuthor>
    </TestimonialItemContainer>
  );
};

export default TestimonialItem;
