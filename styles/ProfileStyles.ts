"use client";
import styled from "styled-components";

export const ProfileContainer = styled.div``;

export const ProfileHeaderWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  gap: 16px;
`;

export const ProfileHeaderContainer = styled.div`
  display: flex;
  gap: 24px;
  span {
    flex-shrink: 0;
  }
`;
export const ProfileHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProfileName = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
`;

export const ProfileRole = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;
export const ProfileDescription = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;
export const ProfileBodyWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
`;
export const ProfileBodyContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  height: 100%;
`;
export const ProfileAsideWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProfileAsideContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
`;
export const ProfileTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;
export const ProfileAsideItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;
export const ProfileAsideItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
`;
export const ProfileAsideItemLabel = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const ProfileAsideItemValue = styled.p``;

export const ProfileTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const ProfileTabItemContainer = styled.div`
  padding: 8px;
  width: 100%;
  height: 100%;
`;
export const ProfileOppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
