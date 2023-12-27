import styled from 'styled-components';

export const ListOfCommonMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 220px) / 5);
`;

export const MovieTitle = styled.h3`
  text-align: center;
  font-size: 18px;
  color: rgba(31, 3, 85, 1);

  &:hover {
    /* color: rgb(31 119 59); */
    color: rgba(31, 3, 85, 1);
    text-decoration: underline;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 18px;
`;

export const MovieImg = styled.img`
  background-size: cover;
  width: 100%;
  height: 100%;
`;
