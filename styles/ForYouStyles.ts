"use client";
import styled from "styled-components";

export const ForYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ForYouTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;
export const RecommendationsContainer = styled.div`
  padding: 16px;
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 16px; /* gutter size */
    background-clip: padding-box;
  }
`;
export const RecommendationItemContainer = styled.div`
  width: 100%;
`;
