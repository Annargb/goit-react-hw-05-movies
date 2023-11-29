import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowBackOutline } from 'react-icons/ti';

export const AdditionInfoTitle = styled.h2`
  margin-bottom: 20px;
  color: rgba(31, 3, 85, 0.9);
`;

export const AdditionInfoLink = styled(NavLink)`
  &.active {
    color: red;
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
