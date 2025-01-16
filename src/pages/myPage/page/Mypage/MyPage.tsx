import { LetsGoButton, ProfileCard } from '@pages/myPage/components';

const MyPage = () => {
  return (
    <div>
      <ProfileCard isLogin={false} />
      <LetsGoButton text={'찜 목록'} />
      <LetsGoButton text={'케이키에 문의하기'} />
      <LetsGoButton text={'로그아웃'} />
    </div>
  );
};

export default MyPage;