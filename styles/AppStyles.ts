"use client";
import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-light);
`;
export const PageWrapper = styled.main`
  width: 100%;
  padding: 24px;
  background-color: var(--background-light50);
  color: var(--text-background);
  border-radius: 16px;
  margin: 12px;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const UserContainer = styled.div`
  height: 60px;
  padding: 0 18px;
  gap: 48px;
  flex-shrink: 0;
  border-radius: 14px;
  background-color: var(--background-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  svg {
    width: 28px;
    height: 28px;
  }
`;
