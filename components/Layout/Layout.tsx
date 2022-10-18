import React from 'react';
import Wrapper from 'components/Wrapper';
import css from 'styled-jsx/css';
// import Link from 'next/link';

import globalStyles from './globalStyles';
import styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

// some custom styles for wrapper
const wrapperCss = css.resolve`
  .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const Layout = ({ children }: LayoutProps) => (
  <div className="app">
    <style jsx>{styles}</style>
    {wrapperCss.styles}

    <header className="app-header">
      <Wrapper className={wrapperCss.className}>
        <img
          className="app-logo"
          src="/static/upcloud-logo.svg"
          alt="UpCloud logo"
        />
        <nav className="app-nav">
          <a href="#">Servers</a>
          <a href="#">Storages</a>
        </nav>
      </Wrapper>
    </header>

    <Wrapper>{children}</Wrapper>

    <style jsx global>
      {globalStyles}
    </style>
  </div>
);
