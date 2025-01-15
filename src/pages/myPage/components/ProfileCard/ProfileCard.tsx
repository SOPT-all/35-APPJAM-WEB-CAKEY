import { ImgMypageProfileLogin } from '@svgs';

import {
  profileContainer,
  profileEmail,
  profileImg,
  profileSubText,
  profileText,
  userInfo,
  zzim,
} from './ProfileCard.css';

interface ProfileProps {
  isLogin: boolean;
  userName?: string;
  userEmail?: string;
}

const ProfileCard = ({ isLogin, userName, userEmail }: ProfileProps) => {
  return (
    <div className={profileContainer}>
      <ImgMypageProfileLogin className={profileImg} />
      <div className={userInfo}>
        <div className={profileText}>
          {isLogin ? userName : '로그인이 필요해요'}
        </div>
        {isLogin ? (
          <div className={profileEmail}>{userEmail}</div>
        ) : (
          <div className={profileSubText}>
            로그인을 하면 <b className={zzim}>찜 기능</b>을 쓸 수 있어요!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
