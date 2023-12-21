import Image from 'next/image';
import React, { useState } from 'react';
import { TextSpan } from '../../../src/fonts/font.styled';
import {
  Project,
  ProjectBtn,
  ProjectContent,
  ProjectImg,
  ProjectLeader,
  ProjectName,
} from './Content.styled';

const Content = ({ img, name, leader, content }) => {
  const [useBtn, setBtn] = useState(false);
  return (
    <>
      <Project>
        <ProjectImg
          style={{
            borderRadius: useBtn ? '50%' : '0%',
            backgroundColor: useBtn
              ? 'rgb(255,233,177,0.7)'
              : 'rgb(255,255,255,0)', //rgb(119,67,219,0.5)
          }}
        >
          <Image
            src={img}
            width={390}
            height={390}
            alt="button"
            onClick={() => setBtn(!useBtn)}
          />
        </ProjectImg>
        <ProjectName>
          <TextSpan variant={'Body1'}>{name}</TextSpan>
        </ProjectName>
        <ProjectBtn
          type="button"
          onClick={() => setBtn(!useBtn)}
          style={
            useBtn
              ? { background: 'url("/img/btnM.svg")' }
              : { background: 'url("/img/btnP.svg") ' }
          }
        ></ProjectBtn>
        {leader ? (
          <ProjectLeader>
            <TextSpan variant={'Body2'}>{leader}</TextSpan>
          </ProjectLeader>
        ) : (
          <></>
        )}

        <ProjectContent style={{ display: useBtn ? 'flex' : 'none ' }}>
          <TextSpan variant={'Body3'}> {content}</TextSpan>
        </ProjectContent>
      </Project>
    </>
  );
};

Content.defaultProps = {
  img: '/img/TeapotLogo.svg',
  name: 'Tools',
  content: '내용',
};

export default Content;
