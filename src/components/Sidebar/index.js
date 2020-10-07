import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SideBtnRoute,
  SidebarMenu,
} from './styles';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        <SideBtnRoute>Sign In</SideBtnRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;
