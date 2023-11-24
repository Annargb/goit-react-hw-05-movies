import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 34px;
  padding-left: 34px;
  background-color: rgba(246, 237, 240, 0.79);
`;

export const Header = styled.header`
  min-height: 84px;
  padding: 24px;
  background-color: rgba(31, 3, 85, 0.9);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderMenuLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  color: #fff;

  &.active {
    color: rgba(94, 166, 117, 1);
  }
`;

export const HeaderNavigationList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
`;

export const Main = styled.main`
  padding: 24px;
`;
