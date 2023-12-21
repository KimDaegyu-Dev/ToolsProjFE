// import img from '../publ  ic/img/bannerImage.png'
import React from 'react';
import { CircleContainer, CirclePadding, Circleinside } from './circle.styled';

const Circles = () => {
  const newArr = [];
  for (let i = 0; i < 112; i++) {
    newArr.push(i);
  }
  return (
    <>
      {/* <BannerImg>
        <Image src={'/img/Banner.svg'} width={1900} height={828} />
      </BannerImg> */}

      <CircleContainer>
        {newArr.map((item) => (
          <CirclePadding key={item}>
            <Circleinside></Circleinside>
          </CirclePadding>
        ))}
      </CircleContainer>
    </>
  );
};

export default Circles;
