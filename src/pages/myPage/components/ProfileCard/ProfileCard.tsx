interface ProfileProps {
  isLogin: boolean;
  username?: string;
}

const ProfileCard = ({ isLogin, username }: ProfileProps) => {
  return <div>{isLogin ? username : '로그인이 필요해요'}</div>;
};

export default ProfileCard;
