import styled from '@emotion/styled';

export const FeedbackOptionsList = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
`;

export const FeedbackOption = styled.button`
  padding: 4px;
  border: 1px solid #000000;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background-color: #bdddfc;
  text-transform: capitalize;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 8px;
  }
`;
