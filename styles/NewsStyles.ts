"use client";
import styled from "styled-components";

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const NewsItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px;
  cursor: pointer;
  gap: 10px;
`;
export const NewsItemTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 140%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const NewsItemDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const NewsItemDate = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 8px;
`;
