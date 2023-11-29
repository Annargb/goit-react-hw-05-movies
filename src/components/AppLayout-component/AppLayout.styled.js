import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  /* max-width: 1400px; */
  max-width: 100wh;
  min-height: 100vh;
  /* margin-right: auto;
  margin-left: auto; */
  /* padding-right: 34px;
  padding-left: 34px; */
  background-color: rgba(116, 84, 199, 0.28);
  /* background-color: rgba(246, 237, 240, 1); */
  /* rgb(118 142 205 / 39%) */
  /* rgb(57 166 42 / 29%) */
  /* rgb(116 84 199 / 28%) */
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 84px;
  padding: 24px;
  background-color: rgba(31, 3, 85, 0.9);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

// rgb(36 10 86);

export const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderMenuLink = styled(NavLink)`
  font-size: 26px;
  /* font-size: 2vw; */
  font-weight: 700;
  text-transform: uppercase;
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
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px;
`;

export const LogoText = styled.p`
  max-width: 140px;
  max-height: 100px;
  text-align: center;
  font-size: 1.5em;
  /* font-size: 30px; */
  font-weight: 700;
  line-height: 0.8;
  text-transform: uppercase;
  background: linear-gradient(135deg, #12bcb0 20%, #fabe0e 70%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const WrapperLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
