import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 28px;
  padding: 28px 64px 28px 64px;
  border-radius: 20px;
  overflow: hidden;
`;

export const TitleOfFilm = styled.h1`
  text-align: center;
  margin-bottom: 34px;
  color: #fff;
`;

export const ImageWrapper = styled.div`
  max-width: 300px;
`;

export const FilmWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-bottom: 28px;
`;

export const DescriptionList = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  margin-bottom: 14px;
`;

export const GenresList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DescriptionText = styled.p`
  color: #fff;
`;

// export const AccentText = styled.p`
//   font-size: 18px;
//   font-weight: 500;
//   color: #fff;
// `;

export const AccentText = styled.li`
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContainerDescription = styled.div`
  display: flex;
  gap: 24px;
`;

export const AccentList = styled.ul`
  flex-shrink: 0;
`;

export const DescriptionItem = styled.li`
  line-height: 1.5;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`;
