"use client";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 256px;
`;
export const SidebarContainer = styled.div`
  width: 256px;
  overflow-y: auto;
  z-index: 100;
  padding: 16px;
  height: 100%;
  position: fixed;
`;

export const LogoContainer = styled.div`
  padding: 24px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  svg {
    height: 20px;
    width: 20px;
  }
`;
