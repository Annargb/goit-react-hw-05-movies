import {
  ReviewAuthor,
  ReviewWrapper,
  ReviewComment,
} from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map(({ author, content }) => (
      <ReviewWrapper key={author}>
        <ReviewAuthor>{author}</ReviewAuthor>
        <ReviewComment>{content}</ReviewComment>
      </ReviewWrapper>
    ))}
  </ul>
);
