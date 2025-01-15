import CardList from 'src/components/common/CardList/CardList';

const data1 = {
  nextLikesCursor: 25,
  storeCount: 122,
  stores: [
    {
      storeId: 1,
      storeName: '버터뭉1',
      station: '종로5가역',
      address: '서울 중구 동호로 385-2',
      storeLikesCount: 30,
      isLiked: false,
      images: [
        {
          imageId: 1,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 2,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 3,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 4,
          imageUrl: '../public/example-img.png',
        },
      ],
    },
    {
      storeId: 2,
      storeName: '버터뭉2',
      station: '홍대입구역',
      address: '서울 마포구 동호로 385-2',
      storeLikesCount: 28,
      isLiked: true,
      images: [
        {
          imageId: 5,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 6,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 7,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 8,
          imageUrl: '../public/example-img.png',
        },
      ],
    },
    {
      storeId: 3,
      storeName: '버터뭉3',
      station: '홍대입구역',
      address: '서울 마포구 구호로 385-2',
      storeLikesCount: 26,
      isLiked: false,
      images: [
        {
          imageId: 9,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 10,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 11,
          imageUrl: '../public/example-img.png',
        },
        {
          imageId: 12,
          imageUrl: '../public/example-img.png',
        },
      ],
    },
  ],
};

const data2 = {
  cakeCount: 12,
  cakes: [
    {
      cakeId: 1,
      storeId: 1,
      storeName: '다연이스윕',
      station: '종로5가역',
      isLiked: true,
      imageUrl: '../public/example-img.png',
      likeCount: 50,
    },
    {
      cakeId: 2,
      storeId: 2,
      storeName: '앙큼서희네',
      station: '종로5가역',
      isLiked: true,
      imageUrl: '../public/example-img.png',
      likeCount: 30,
    },
    {
      cakeId: 3,
      storeId: 2,
      storeName: '앙큼서희네',
      station: '종로5가역',
      isLiked: false,
      imageUrl: '../public/example-img.png',
      likeCount: 20,
    },
  ],
};

const HomePage = () => {
  return (
    <div>
      {/* <CardList content="store" data={data1} /> */}
      {/* <CardList content="likedStore" data={data1} /> */}
      <CardList item="design" data={data2} />
      {/* <CardList content="likedDesign" data={data2} /> */}
    </div>
  );
};

export default HomePage;
