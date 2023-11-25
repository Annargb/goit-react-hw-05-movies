import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionInfoTitle = styled.h2`
  margin-bottom: 20px;
`;

export const AdditionInfoLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
