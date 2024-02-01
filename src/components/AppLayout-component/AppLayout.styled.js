import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  background-color: rgb(111 123 154 / 39%);
`;

export const Header = styled.header`
  background-color: rgba(31, 3, 85, 1);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 15px 24px 15px 24px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 80px;
`;

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderMenuLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 600;
  color: #fff;

  &.active {
    color: rgba(94, 166, 117, 1);
    text-decoration: underline;
  }

  &:hover,
  &:focus {
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
  max-width: 1400px;

  margin-right: auto;
  margin-left: auto;
  padding: 24px;
`;

export const LogoText = styled.p`
  max-width: 140px;
  max-height: 100px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 0.9;
  background: linear-gradient(135deg, #12bcb0 20%, #fabe0e 70%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const WrapperLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
`;
