"use client";
import styled from "styled-components";

export const NeedsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const NeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const NeedsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 24px;
  cursor: pointer;
`;

export const NeedsItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const NeedsItemDate = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
`;
export const NeedsItemText = styled.p`
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const NeedsItemTags = styled.div`
  display: flex;
  gap: 8px;
`;
export const NeedsFilter = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  div {
    cursor: pointer;
  }
`;

export const NeedsItemBody = styled.div`
  display: flex;
  gap: 8px;
`;
export const NeedsItemImage = styled.div<{ $url: string }>`
  width: 150px;
  background-color: #f5f5f5;
  flex-shrink: 0;
  border-radius: 10px;
  background-image: url(${(props) => props.$url});
  background-position: center;
  background-size: cover;
`;
