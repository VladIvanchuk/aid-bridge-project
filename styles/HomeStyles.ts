"use client";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;
export const RecentNeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 3;
`;
export const RecentNeedsTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const RecentNeedsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 24px;
`;

export const BestVolunteersContainer = styled.div`
  display: flex;
  flex: 1;
`;
export const RecentNeedsItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const RecentNeedsItemDate = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  flex-shrink: 0;
`;
export const RecentNeedsItemText = styled.p`
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RecentNeedsItemTags = styled.div`
  display: flex;
  gap: 8px;
`;
