import { IUser } from "@/models/user";

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

const ProfileAside = ({ userProfile }: Partial<IUser>): React.ReactElement => {
  return (
    <ProfileAsideWrapper>
      <ProfileAsideContainer>
        <ProfileTitle>Інформація профілю</ProfileTitle>
        <ProfileAsideItems>
          <ProfileAsideItem>
            <ProfileAsideItemLabel>
              <FaLocationDot />З
            </ProfileAsideItemLabel>
            <ProfileAsideItemValue>
              {userProfile?.location}
            </ProfileAsideItemValue>
          </ProfileAsideItem>
          <ProfileAsideItem>
            <ProfileAsideItemLabel>
              <FaUser />
              Допомагає з
            </ProfileAsideItemLabel>
            <ProfileAsideItemValue>Червень 2024</ProfileAsideItemValue>
          </ProfileAsideItem>
          <ProfileAsideItem>
            <ProfileAsideItemLabel>
              <FaClock />
              Остання активність
            </ProfileAsideItemLabel>
            <ProfileAsideItemValue>Онлайн</ProfileAsideItemValue>
          </ProfileAsideItem>
        </ProfileAsideItems>
      </ProfileAsideContainer>
      <ProfileAsideContainer>
        <ProfileDescription>{userProfile?.bio}</ProfileDescription>
      </ProfileAsideContainer>
    </ProfileAsideWrapper>
  );
};

export default ProfileAside;
