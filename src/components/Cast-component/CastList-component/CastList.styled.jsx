import styled from 'styled-components';

export const ListOfCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 220px) / 6);
`;

export const ImgWrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 14px;
  /* width: 180px; */
  height: 280px;
`;

export const ActorName = styled.h5`
  font-size: 16px;
  text-align: center;
  color: #1d1d1d;
`;
