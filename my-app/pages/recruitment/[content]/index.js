import Link from 'next/Link';
import React from 'react';
import {
  Article,
  ArticleOrder1,
  ArticleOrder2,
  ContentOrder,
  ContentText,
  ContentTitle,
  DeleteButton,
  EditButton,
  HeadTitle,
  ListButton,
  ModificationButton,
  NoticeButton,
  NoticeContent,
  NoticePage,
  OrderButton,
  TextInfo,
  Title,
} from '../../../components/BoardComponents/BoardContent.styled';
import Comment from '../../../components/BoardComponents/Comment';
import Header from '../../../components/Header/Header';

function Notice() {
  return (
    <>
      <Header />
      <NoticePage>
        <HeadTitle>모집</HeadTitle>
        <NoticeContent>
          <ContentTitle>
            <Title>
              Tools 신입부원 모집
              <EditButton>
                <ModificationButton>수정 </ModificationButton>|
                <DeleteButton> 삭제</DeleteButton>
              </EditButton>
            </Title>
            <TextInfo>이소윤 | 2023.09.14 | 20</TextInfo>
          </ContentTitle>
          <ContentText>
            <Article>
              프론트 : React Next.js
              <br /> CSS : Styled-components
              <br /> 백 : Node.js
              <br /> DB : MySQL
            </Article>
          </ContentText>
        </NoticeContent>
        <Comment />
        <NoticeButton>
          <Link
            href={`/recruitment`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <ListButton>목록</ListButton>
          </Link>
        </NoticeButton>
        <ArticleOrder1>
          <OrderButton>이전글</OrderButton>
          <ContentOrder></ContentOrder>
        </ArticleOrder1>
        <ArticleOrder2>
          <OrderButton>다음글</OrderButton>
          <ContentOrder>김대규의 react스터디</ContentOrder>
        </ArticleOrder2>
      </NoticePage>
    </>
  );
}

export default Notice;
