import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import { Loader } from 'components/Loader-component/Loader';
// import logo from '../../img/cinema.png';
import logo from '../../img/popcorn.png';
import {
  Layout,
  Header,
  HeaderMenuLink,
  NavigationWrapper,
  HeaderNavigationList,
  Main,
  // LogoText,
  WrapperLogo,
} from './AppLayout.styled';

const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <WrapperLogo to="/">
          {/* <LogoText>choose a movie for today</LogoText> */}
          <img src={logo} alt="logo" width="200" />
        </WrapperLogo>
        <NavigationWrapper>
          <HeaderNavigationList>
            <li>
              <HeaderMenuLink to="/">Home</HeaderMenuLink>
            </li>
            <li>
              <HeaderMenuLink to="/movies">Movies</HeaderMenuLink>
            </li>
          </HeaderNavigationList>
        </NavigationWrapper>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <GlobalStyle />
    </Layout>
  );
};

export default AppLayout;
