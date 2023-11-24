import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyle from 'components/GlobalStyle';
import {
  Layout,
  Header,
  HeaderMenuLink,
  NavigationWrapper,
  HeaderNavigationList,
  Main,
} from './AppLayout.styled';

const AppLayout = () => {
  return (
    <Layout>
      <Header>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <GlobalStyle />
    </Layout>
  );
};

export default AppLayout;
