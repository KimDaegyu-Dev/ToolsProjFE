import axios from 'axios';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  Article,
  BoardContent,
  ButtonBlock,
  CancleButton,
  ContentText,
  ContentTitle,
  EditContentTextArea,
  EditingPage,
  HeadTitle,
  InputTitle,
  IsNotice,
  IsNoticeArea,
  IsNoticeBoard,
  IsNoticeTable,
  ListButton,
  RegisterButton,
  SubmitButton,
  Title,
} from '../../../components/EditPage/editing.styled';
import Header from '../../../components/Header/Header';

function Notice() {
  const router = useRouter();
  const [title, setTitle] = useState();
  const [isNotice, setIsNotice] = useState(false);
  const [content, setContent] = useState();
  const [boardName, setBoardName] = useState('게시판');
  const [cookies] = useCookies(['userInfo']);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const boardNameCheck = () => {
      const boardType = router.query.boardType;
      if (boardType === 'free') {
        setBoardName('자유게시판');
      }
      if (boardType === 'notice') {
        setBoardName('공지');
      }
      if (boardType === 'recruitment') {
        setBoardName('모집');
      }
    };
    boardNameCheck();
  }, [router]);
  const checkNoticeHandler = useCallback(() => {
    setIsNotice(!isNotice);
  }, [isNotice]);
  const inputTitleHandler = useCallback((e) => {
    setTitle(e.currentTarget.value);
  }, []);
  const inputContentHandler = useCallback((e) => {
    setContent(e.currentTarget.value);
  }, []);

  const fileChangeHandler = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      if (cookies.userInfo.user) {
        const formData = new FormData();
        formData.append('author', cookies.userInfo.user);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('isNotice', isNotice === true ? 1 : 0);
        formData.append('type', router.query.boardType);
        formData.append('file', file);
        const res = await axios.post(
          'http://localhost:8080/board/edit',
          formData,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );

        if (res.status === 200) {
          alert('게시글이 작성되었습니다.');
          router.push(`/board/list/${router.query.boardType}`);
        }
      }
    } catch (error) {
      if (error.response.data.errorCode === 'INVALID_REQUIRED_PARAM') {
        alert('필수 파라미터가 누락되었습니다.');
      } else {
        console.log(error);
        alert('게시글 작성을 실패하였습니다.');
      }
    }
  }, [router, title, content, cookies, isNotice, file]);

  return (
    <>
      <Header />
      <EditingPage>
        <HeadTitle>{boardName}</HeadTitle>
        <BoardContent>
          <ContentTitle>
            <Title>제목</Title>
            <InputTitle
              placeholder="제목을 입력하세요."
              value={title || ''}
              onChange={inputTitleHandler}
              type="text"
            />
          </ContentTitle>
          <ContentText>
            <Article>내용</Article>
            <EditContentTextArea
              value={content || ''}
              placeholder="내용을 입력하세요"
              onChange={inputContentHandler}
            />
          </ContentText>
          {/* <ContentFile>
            <AddFile>첨부파일</AddFile>
            <UploadFile>
              <input type="file" name="file" onChange={fileChangeHandler} />
            </UploadFile>
          </ContentFile> */}
          {cookies.userInfo.isStaff && (
            <IsNoticeArea>
              <IsNoticeTable>공지여부</IsNoticeTable>
              <IsNoticeBoard>
                <IsNotice
                  type="checkbox"
                  checked={isNotice}
                  onChange={checkNoticeHandler}
                ></IsNotice>
              </IsNoticeBoard>
            </IsNoticeArea>
          )}
        </BoardContent>
        <ButtonBlock>
          <SubmitButton>
            <div
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <RegisterButton onClick={submitHandler}>등록</RegisterButton>
            </div>
          </SubmitButton>
          <CancleButton>
            <Link
              href={`/board/list/${router.query.boardType}`}
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
            >
              <ListButton>취소</ListButton>
            </Link>
          </CancleButton>
        </ButtonBlock>
      </EditingPage>
    </>
  );
}

export default Notice;
