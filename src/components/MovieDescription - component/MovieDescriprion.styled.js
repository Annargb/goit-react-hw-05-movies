import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowBackOutline } from 'react-icons/ti';

export const AdditionInfoTitle = styled.h2`
  font-size: 26px;
  line-height: 1.5;
  margin-bottom: 14px;
  color: rgba(31, 3, 85, 0.9);
`;

export const AdditionInfoLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 600;
  color: #1d1d1d;

  &.active {
    color: rgba(31, 3, 85, 0.9);
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: rgba(31, 3, 85, 0.9);
  }
`;

export const ReturnBackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 170px;
  padding: 12px;
  border-radius: 25px;
  background-color: rgba(31, 3, 85, 0.9);
  border: none;
  border: 1px solid #1f0355;
  margin-bottom: 28px;
`;
export const ButtonText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const ReturnBackIcon = styled(TiArrowBackOutline)`
  width: 28px;
  height: 28px;
  fill: #fff;
`;

export const AdditionalList = styled.ul`
  margin-bottom: 24px;
`;

export const AdditionalListItem = styled.li`
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`;
