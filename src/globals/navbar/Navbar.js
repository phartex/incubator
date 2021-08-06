import React from 'react';
import styled from 'styled-components';

import Toolbar from '../toolbar/Toolbar';
import SideNav from '../sideBar/SideNav';
import colors from '../../config/colors';

export default function Navbar(props) {
  return (
    <Wrapper>
      <SideNav />
      <Toolbar props={props} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${process.browser && window.location.pathname === '/'
    ? 'transparent'
    : `${colors.colorBlue}`};
  z-index: 100;
  position: relative;
`;
