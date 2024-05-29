"use client";
import { useAuth } from "@/contexts/AuthContext";

import {
  ProfileAsideContainer,
  ProfileAsideItem,
  ProfileAsideItemLabel,
  ProfileAsideItemValue,
  ProfileAsideItems,
  ProfileAsideWrapper,
  ProfileDescription,
  ProfileTitle,
} from "@/styles/ProfileStyles";
import { FaClock, FaLocationDot, FaUser } from "react-icons/fa6";

const ProfileAside = (): React.ReactElement => {
  const { user } = useAuth();

  return (
    <ProfileAsideWrapper>
      <ProfileAsideContainer>
        <ProfileTitle>Інформація профілю</ProfileTitle>
        <ProfileAsideItems>
          <ProfileAsideItem>
            <ProfileAsideItemLabel>
              <FaLocationDot />З
            </ProfileAsideItemLabel>
            <ProfileAsideItemValue>Україна</ProfileAsideItemValue>
          </ProfileAsideItem>
          <ProfileAsideItem>
            <ProfileAsideItemLabel>
              <FaUser />
              Допомагає з
            </ProfileAsideItemLabel>
            <ProfileAsideItemValue>Червень 2023</ProfileAsideItemValue>
          </ProfileAsideItem>
          <ProfileAsideItem>
            <ProfileAsideItemLabel>
              <FaClock />
              Остання активність
            </ProfileAsideItemLabel>
            <ProfileAsideItemValue>2 дні</ProfileAsideItemValue>
          </ProfileAsideItem>
        </ProfileAsideItems>
      </ProfileAsideContainer>
      <ProfileAsideContainer>
        <ProfileDescription>
          As a dedicated and experienced web developer, I have a strong
          foundation in front-end technologies and am eager to take on
        </ProfileDescription>
      </ProfileAsideContainer>
    </ProfileAsideWrapper>
  );
};

export default ProfileAside;
