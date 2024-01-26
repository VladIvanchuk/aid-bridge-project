"use client";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
`;
export const HomeTopContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const HomeTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const RecentNeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 3;
`;

export const RecentNeedsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 24px;
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
export const BestVolunteersContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px 4px;
`;
export const BestVolunteersTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 16px;
  padding: 0 4px;
`;
export const BestVolunteersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  padding: 0 20px;
`;
export const BestVolunteersListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const BestVolunteersListRate = styled.div`
  display: flex;
  gap: 10px;
`;
export const NewOppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const NewOppItemsContainer = styled.div`
  display: flex;
  gap: 24px;
`;
export const NewOppItemContainer = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 320px;
`;
export const NewOppItemText = styled.p`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
