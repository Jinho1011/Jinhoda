import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import GlobalStyle from '@/assets/styles/GlobalStyle';

import Header from './header/header';
import Footer from './footer';

const LayoutContainer = styled.div``;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <GlobalStyle />
            <LayoutContainer>
                <Header categories={['개발']} />
                {children}
                <Footer />
            </LayoutContainer>
        </>
    );
};

export default Layout;
