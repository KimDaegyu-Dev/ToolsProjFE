import axios from 'axios';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
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
} from '../../../../components/BoardComponents/BoardContent.styled';
import Comment from '../../../../components/BoardComponents/Comment';
import {
  CommentArea,
  CommentAreaComments,
  CommentAreaCommentsAuthor,
  CommentAreaCommentsData,
  CommentAreaCommentsDelete,
  CommentAreaCommentsImg,
  CommentAreaCommentsProfile,
  CommentAreaHeader,
  CommentAreaUl,
} from '../../../../components/BoardComponents/Comment.styled';
import Header from '../../../../components/Header/Header';
import { TextSpan } from '../../../../src/fonts/font.styled';

function Notice() {
  const router = useRouter();
  const [cookies] = useCookies(['userInfo']);
  const [boardContent, setBoardContent] = useState({});
  const [comment, setComment] = useState([]);
  const [value, setValue] = useState();
  const [boardName, setBoardName] = useState('게시판');
  const boardType = router.query.boardType;

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
  const useConfirm = (message = null, onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== 'function') {
      return;
    }
    if (onCancel && typeof onCancel !== 'function') {
      return;
    }

    const confirmAction = () => {
      if (window.confirm(message)) {
        return onConfirm();
      } else {
        return onCancel();
      }
    };

    return confirmAction;
  };
  const deleteContentConfirm = () => {
    onClickContentDelete();
  };
  const deleteCommentConfirm = () => {
    return true;
  };
  const cancelConfirm = () => {
    return false;
  };
  const confirmContentDelete = useConfirm(
    '게시글을 삭제하시겠습니까?',
    deleteContentConfirm,
    cancelConfirm,
  );
  const confirmCommentDelete = useConfirm(
    '댓글을 삭제하시겠습니까?',
    deleteCommentConfirm,
    cancelConfirm,
  );
  const onClickContentDelete = async () => {
    try {
      if (router.query.id) {
        const res = await axios.post(
          `http://localhost:8080/board/delete/${router.query.id}`,
          {},
          { withCredentials: true },
        );
        if (res.status === 200) {
          alert('게시물이 삭제되었습니다.');
          router.back();
        }
      }
    } catch (error) {
      alert('게시물이 삭제를 실패하였습니다.');
      router.reload();
    }
  };
  var commentDelete = false;
  const onClickCommentDelete = async (commentId) => {
    commentDelete = confirmCommentDelete();
    if (commentDelete) {
      try {
        if (commentId) {
          const res = await axios.post(
            `http://localhost:8080/comment/delete/${commentId}`,
            {},
            { withCredentials: true },
          );
          if (res.status === 200) {
            alert('댓글이 삭제되었습니다.');
            router.reload();
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const getBoardContent = async () => {
      try {
        if (router.query.id) {
          const res = await axios.get(
            `http://localhost:8080/board/view/${router.query.id}`,
            { withCredentials: true },
          );
          if (res.status === 200) {
            setBoardContent(res.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBoardContent();
  }, [router]);
  useEffect(() => {
    const getComment = async () => {
      try {
        if (router.query.id) {
          const res = await axios.get(
            `http://localhost:8080/comment/list/${router.query.id}`,
            { withCredentials: true },
          );
          if (res.status === 200) {
            setComment(res.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, [router]);
  const onSubmit = async () => {
    try {
      const res = await axios.post(
        `http://localhost:8080/comment/post`,
        {
          id: router.query.id,
          data: value,
        },
        { withCredentials: true },
      );
      if (res.status === 200) {
        console.log('성공');
        router.push(
          `/board/view/${router.query.id}?boardType=${router.query.boardType}`,
        );
        // valueHandler('')
      }
    } catch (error) {
      console.log(error);
    }
    setValue('');
  };
  var boardAfterId = boardContent.neighbor?.after?.id || null;
  var boardAfterTitle = boardContent.neighbor?.after?.title || null;
  var boardBeforeId = boardContent.neighbor?.before?.id || null;
  var boardBeforeTitle = boardContent.neighbor?.before?.title || null;

  return (
    <>
      <Header />
      <NoticePage>
        <HeadTitle>{boardName}</HeadTitle>
        <NoticeContent>
          <ContentTitle>
            <Title>
              {boardContent.title}
              {cookies.userInfo.user === boardContent.author?.id ? (
                <EditButton>
                  <ModificationButton
                    onClick={() =>
                      router.push(
                        `/board/edit/${router.query.id}?boardType=free`,
                      )
                    }
                  >
                    수정
                  </ModificationButton>
                  |
                  <DeleteButton onClick={confirmContentDelete}>
                    삭제
                  </DeleteButton>
                </EditButton>
              ) : null}
            </Title>
            <TextInfo>
              작성자 : {boardContent.author?.name} |{' '}
              {new Date(boardContent.postedAt).toLocaleString()} | 조회수 :{' '}
              {boardContent.view}
            </TextInfo>
          </ContentTitle>
          <ContentText>
            <Article dangerouslySetInnerHTML={{ __html: boardContent.contents }}></Article>
          </ContentText>
          {/* {boardContent.file && (
            <div>
              <p>첨부 파일: {boardContent.file.originalname}</p>
              <p>파일 크기: {boardContent.file.size} bytes</p>
            </div>
          )} */}
        </NoticeContent>

        <CommentArea>
          <CommentAreaHeader>
            <TextSpan variant={'Body2'} weight={'Bold'}>
              댓글({comment.length})
            </TextSpan>
          </CommentAreaHeader>
          <CommentAreaUl>
            {comment.map((item, index) => (
              <CommentAreaComments key={index}>
                <CommentAreaCommentsProfile>
                  <CommentAreaCommentsImg
                    src={'/img/commentUserImg.svg'}
                    width={30}
                    height={30}
                    alt="user"
                  ></CommentAreaCommentsImg>
                  <CommentAreaCommentsAuthor>
                    {item.author.no} {item.author.name}
                  </CommentAreaCommentsAuthor>
                  {cookies.userInfo.user === item.author.userId && (
                    <CommentAreaCommentsDelete
                      onClick={() => onClickCommentDelete(item.commentId)}
                    >
                      삭제
                    </CommentAreaCommentsDelete>
                  )}
                </CommentAreaCommentsProfile>
                <CommentAreaCommentsData>{item.data}</CommentAreaCommentsData>
              </CommentAreaComments>
            ))}
          </CommentAreaUl>
        </CommentArea>
        <Comment onSubmit={onSubmit} value={value} setValue={setValue} />
        <NoticeButton>
          <Link
            href={`/board/list/${boardType}`}
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <ListButton>목록</ListButton>
          </Link>
        </NoticeButton>
        <ArticleOrder1
          href={{
            pathname: `/board/view/${boardAfterId}`,
            query: {
              boardType: boardType,
            },
          }}
        >
          <OrderButton>다음글</OrderButton>
          <ContentOrder>{boardAfterTitle}</ContentOrder>
        </ArticleOrder1>
        <ArticleOrder2
          href={{
            pathname: `/board/view/${boardBeforeId}`,
            query: {
              boardType: boardType,
            },
          }}
        >
          <OrderButton>이전글</OrderButton>
          <ContentOrder>{boardBeforeTitle}</ContentOrder>
        </ArticleOrder2>
      </NoticePage>
    </>
  );
}

export default Notice;
