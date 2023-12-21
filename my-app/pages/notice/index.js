import {
  BoardContainer,
  BoardTableContainer,
} from '../../components/BoardComponents/Board.styled';
import BoardHeader from '../../components/BoardComponents/BoardHeader';
import { BoardItem } from '../../components/BoardComponents/BoardItem';
import LinkToEdit from '../../components/BoardComponents/LinkToEdit';
import {
  CommunityContainer,
  CommunitySearch,
  CommunityTitle,
} from '../../components/Community/Community.styled';
import Header from '../../components/Header/Header';

function Notice() {
  const content = [
    {
      isNotice: true,
      title: `Tools 회칙`,
      date: `2023.09.14`,
      view: `20`,
    },
    {
      isNotice: true,
      title: `Tools 드라이브 공지`,
      date: `2023.09.14`,
      view: `18`,
    },
    {
      isNotice: false,
      title: `2023 세미나 안내`,
      date: `2023.09.14`,
      view: `18`,
    },
  ];
  content.map((item) => (item.from = `notice`));
  content.map((item, id) => (item.id = `${id}` * 1));
  return (
    <>
      <Header />
      <CommunityContainer>
        <CommunityTitle>공지사항</CommunityTitle>
        <CommunitySearch placeholder="검색" />
        <BoardContainer>
          <BoardHeader />
          <BoardTableContainer>
            {content.map((content, index) => (
              <BoardItem content={content} key={index} />
            ))}
          </BoardTableContainer>
        </BoardContainer>
      </CommunityContainer>
      <LinkToEdit />
    </>
  );
}

export default Notice;
