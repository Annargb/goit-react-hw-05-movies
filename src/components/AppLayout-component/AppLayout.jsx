import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import { Loader } from 'components/Loader-component/Loader';
// import logo from '../../img/cinema.png';
import logo from '../../img/popcorn.png';
// import logo from '../../img/logom.png';
import {
  Layout,
  Header,
  HeaderMenuLink,
  NavigationWrapper,
  HeaderNavigationList,
  Main,
  HeaderWrapper,
  // LogoText,
  WrapperLogo,
} from './AppLayout.styled';

const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <HeaderWrapper>
          <WrapperLogo to="/">
            {/* <LogoText>choose a movie for today</LogoText> */}
            <img src={logo} alt="logo" width="160" />
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
        </HeaderWrapper>
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
