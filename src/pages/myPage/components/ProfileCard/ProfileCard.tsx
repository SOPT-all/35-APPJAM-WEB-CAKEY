import { ImgMypageProfileLogin } from '@svgs';

import {
  profileContainer,
  profileEmail,
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
    <section className={profileContainer}>
      <ImgMypageProfileLogin width={80} height={80} />
      <div className={userInfo}>
        <h1 className={profileText}>
          {isLogin ? userName : '로그인이 필요해요'}
        </h1>
        {isLogin ? (
          <span className={profileEmail}>{userEmail}</span>
        ) : (
          <span className={profileSubText}>
            로그인을 하면 <b className={zzim}>찜 기능</b>을 쓸 수 있어요!
          </span>
        )}
      </div>
    </section>
  );
};

export default ProfileCard;
