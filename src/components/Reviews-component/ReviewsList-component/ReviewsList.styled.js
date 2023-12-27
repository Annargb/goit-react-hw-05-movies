import styled from 'styled-components';

export const ReviewWrapper = styled.li`
  padding: 18px;
  border: 1px solid rgba(31, 3, 85, 0.9);
  border-radius: 20px;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ReviewAuthor = styled.h4`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(31, 3, 85, 1);
  margin-bottom: 8px;
`;

export const ReviewComment = styled.p`
  line-height: 1.5;
`;
