"use client";
import styled from "styled-components";

export const LinkContainer = styled.div`
  color: var(--base-accent);
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;
export const LoaderContainer = styled.div<{ $isFullscreen: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isFullscreen ? "50vh" : "100%")};
  display: grid;
  align-content: center;
`;
