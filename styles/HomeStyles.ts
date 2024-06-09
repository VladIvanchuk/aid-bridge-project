"use client";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 68px;
`;
export const HomeTopContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const HomeTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const RecentNeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 3;
`;
export const HomeSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  align-items: center;
  color: var(--text-background);
  svg {
    fill: var(--base-accent);
    width: 16px;
    height: 16px;
    margin-top: -2px;
  }
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
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;
`;
export const NewOppItemText = styled.p`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const NewOppItemLocation = styled.div`
  display: flex;
  align-items: center;
  margin-left: -4px;
  gap: 4px;
  svg {
    fill: var(--base-accent);
  }
`;
export const NewOppItemLocationText = styled(NewOppItemText)`
  font-weight: 600;
  color: var(--base-accent);
`;
export const MapBannerContainer = styled.div`
  height: 500px;
  background-image: url("/images/Banner_map.webp");
  background-position: 100%;
  background-size: cover;
  border-radius: 30px;
  padding-top: 48px;
  padding-bottom: 64px;
  padding-left: 48px;
  transition: box-shadow 0.2s ease-in;
  width: 98%;
  margin: 24px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
export const MapBannerText = styled.p`
  color: var(--text-light);
  font-size: 2.4rem;
  font-weight: 600;
  width: 45%;
`;
export const MapBannerButton = styled.div`
  background-color: #fff;
  color: var(--base-accent);
  font-size: 1rem;
  font-weight: 700;
  width: 46%;
  border-radius: 500px;
  padding: 14px 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: var(--base-accent);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  transition: 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
    transition: 0.15s ease-in;
  }
`;
export const NewsContainer = styled(NewOppContainer)`
  margin-bottom: 24px;
`;

export const NewsItemsContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const QuestionsContainer = styled.div``;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const SearchResults = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: #f2f2f2;
  position: absolute;
  top: 0;
  padding: 76px 24px 12px;
  z-index: 9;
  border-radius: 15px;
  border: 1px #030303 solid;
`;
export const SearchResultsItem = styled.div``;
