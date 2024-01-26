"use client";
import styled from "styled-components";
import { User } from "@nextui-org/react";

export const SidebarWrapper = styled.div`
  flex-shrink: 0;
  width: 256px;
`;
export const SidebarContainer = styled.div`
  width: 256px;
  overflow-y: auto;
  z-index: 100;
  padding: 16px 24px;
  height: 100%;
  position: fixed;
  background-color: var(--background-light);
`;

export const LogoContainer = styled.div`
  margin: 24px 0;
  border-radius: 24px;
  padding: 16px;
  background-color: var(--background-light50);
  color: var(--text-background);
  font-weight: 600;
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
