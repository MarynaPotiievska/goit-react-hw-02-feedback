import styled from '@emotion/styled';

export const SectionWrapper = styled.section`
  width: 280px;
  margin: 0 auto;
  padding: 20px;
  background-color: #dcedfc;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`;
