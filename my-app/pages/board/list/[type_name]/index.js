import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  BoardContainer,
  BoardTableContainer,
} from '../../../../components/BoardComponents/Board.styled';
import BoardHeader from '../../../../components/BoardComponents/BoardHeader';
import { BoardItem } from '../../../../components/BoardComponents/BoardItem';
import LinkToEdit from '../../../../components/BoardComponents/LinkToEdit';
import PageNation from '../../../../components/BoardComponents/PageNation';
import {
  CommunityContainer,
  CommunitySearch,
  CommunityTitle,
} from '../../../../components/Community/Community.styled';
import Header from '../../../../components/Header/Header';
import { BoardType } from '../../../../utils/BoardType';

function BoardPage() {
  const router = useRouter();
  const [cookies] = useCookies(['userInfo']);
  const [boardList, setBoardList] = useState([]);
  const [boardPage, setBoardPage] = useState(1);
  const [boardSearchPage, setBoardSearchPage] = useState(1);
  const [boardCount, setBoardCount] = useState(0);
  const [boardSearchCount, setBoardSearchCount] = useState(0);
  const [search, setSearch] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const getGet = () => {
    if (isSearch == true) {
      getSearchBoardList();
    }
  }
  const boardTypeName = router.query.type_name;
  const isStaff = cookies.userInfo.isStaff;
  const getSearchBoardList = async () => {
    setBoardSearchPage(1);
    try {
      if (router.query.type_name) {
        axios
          .get(
            `http://localhost:8080/board/list/${router.query.type_name}/${boardSearchPage}`,
            {
              params: { query: search },
              withCredentials: true,
            },
          )
          .then((res) => {
            if (res.status === 200) {
              setBoardList(res.data.list);
              setBoardSearchPage(res.data.page);
              setBoardSearchCount(res.data.count);
              setIsSearch(true);
            }
          });
      }
    } catch (error) {
      alert('검색에 실패하였습니다.');
      router.reload();
    }
  };
  const onSearchKeyPress = (e) => {
    if (e.key === 'Enter') {

      getSearchBoardList();
    }
  };
  const onSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const getBoardList = async () => {
      try {
        if (router.query.type_name) {
          const res = await axios.get(
            `http://localhost:8080/board/list/${router.query.type_name}/${boardPage}`,
            { withCredentials: true },
          );
          if (res.status === 200) {
            setBoardList(res.data.list);
            setBoardPage(res.data.page);
            setBoardCount(res.data.count);
            setIsSearch(false)
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBoardList();
  }, [router, boardPage]);
  return (
    <>
      <Header />
      <CommunityContainer>
        <CommunityTitle>
          {BoardType[router.query.type_name]?.title}
        </CommunityTitle>
        <CommunitySearch
          placeholder="검색"
          value={search}
          onKeyDown={onSearchKeyPress}
          onChange={onSearchHandler}
        />
        <BoardContainer>
          <BoardHeader />
          <BoardTableContainer>
            {boardList.map((board, index) => (
              <BoardItem board={board} boardType={router.query.type_name} key={index} />
            ))}
          </BoardTableContainer>
        </BoardContainer>
      </CommunityContainer>
      {
        (boardTypeName === "notice") ? (
          isStaff &&
          <LinkToEdit boardType={router.query.type_name} />
        )
          :
          (
            <LinkToEdit boardType={boardTypeName} />
          )
      }
      {
        isSearch ?
          (<PageNation boardCount={boardSearchCount} setBoardPage={setBoardSearchPage} get={getGet} />)
          :
          (<PageNation boardCount={boardCount} setBoardPage={setBoardPage} get={getGet} />)
      }

    </>
  );
}

export default BoardPage;
