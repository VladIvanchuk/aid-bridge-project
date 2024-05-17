"use client";
import styled from "styled-components";

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
export const NeedsShortItemContainer = styled(NeedsItemContainer)`
  padding: 16px 10px;
`;

export const NeedsItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NeedsShortItemTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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

export const NeedsItemBody = styled.div`
  display: flex;
  gap: 8px;
`;
export const NeedsShortItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const NeedsItemImage = styled.div<{ $url: string }>`
  width: 150px;
  min-height: 100px;
  background-color: #f5f5f5;
  flex-shrink: 0;
  border-radius: 10px;
  background-image: url(${(props) => props.$url});
  background-position: center;
  background-size: cover;
`;
export const NeedsShortItemImage = styled(NeedsItemImage)`
  width: 100%;
  height: 200px;
`;
export const CreateNeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CreateNeedContainerHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  margin-bottom: 8px;
`;
export const ImagePickerContainer = styled.div`
  width: 300px;
  height: 150px;
  background-color: var(--background-light50);
  border-radius: 14px;
`;
export const CreateNeedContainerRow = styled.div`
  display: flex;
  gap: 16px;
`;
export const CreateNeedContainerFooter = styled.div`
  display: flex;
  gap: 16px;
  justify-content: end;
  margin-bottom: 8px;
`;
