import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import { Loader } from 'components/Loader-component/Loader';
import {
  Layout,
  Header,
  HeaderMenuLink,
  NavigationWrapper,
  HeaderNavigationList,
  Main,
  LogoText,
  WrapperLogo,
} from './AppLayout.styled';

const AppLayout = () => {
  return (
    <Layout>
      <Header>
        <WrapperLogo to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2797/2797990.png"
            alt="logo"
            width="90"
            height="90"
          />
          <LogoText>choose a movie for today</LogoText>
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
