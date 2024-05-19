"use client";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 240px;
`;
export const SidebarContainer = styled.div`
  width: 250px;
  overflow-y: auto;
  z-index: 10;
  padding: 14px 12px 14px 24px;
  height: 100%;
  position: fixed;
  background-color: var(--background-light);
`;

export const LogoContainer = styled.div`
  margin: 0 0 24px;
  border-radius: 24px;
  padding: 16px 20px;
  background-color: var(--background-light50);
  color: var(--text-background);
  font-weight: 600;
  text-align: center;
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
