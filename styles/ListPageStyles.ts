"use client";
import styled from "styled-components";

export const ListPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const ListPageHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ListPageHeaderFilter = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  div {
    cursor: pointer;
  }
`;
