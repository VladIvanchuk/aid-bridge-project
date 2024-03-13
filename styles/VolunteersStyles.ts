"use client";
import styled from "styled-components";

export const VolunteersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const VolunteersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 14px;
`;

export const VolunteersFilter = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  div {
    cursor: pointer;
  }
`;
export const VolunteersItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;
`;
export const VolunteersItemText = styled.p`
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const VolunteersItemLocation = styled.div`
  display: flex;
  align-items: center;
  margin-left: -4px;
  gap: 4px;
  svg {
    fill: var(--base-accent);
  }
`;
export const VolunteersItemLocationText = styled(VolunteersItemText)`
  font-weight: 600;
  color: var(--base-accent);
`;
