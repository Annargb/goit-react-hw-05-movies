import styled from 'styled-components';

export const ListOfCommonMovies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 96px) / 3);
`;
