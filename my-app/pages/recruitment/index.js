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

function Recruitment() {
  const content = [
    {
      isNotice: true,
      title: `Tools 신입부원 모집`,
      date: `2023.09.14`,
      view: `20`,
    },
    {
      isNotice: false,
      title: `김대규의 react스터디`,
      date: `2023.09.14`,
      view: `18`,
    },
  ];
  content.map((item) => (item.from = `recruitment`));
  content.map((item, id) => (item.id = `${id}` * 1));
  return (
    <>
      <Header />
      <CommunityContainer>
        <CommunityTitle>모집</CommunityTitle>
        <CommunitySearch placeholder="검색" />
        <BoardContainer>
          <BoardHeader />
          <BoardTableContainer>
            {content.map((content) => (
              <BoardItem content={content} key={content} />
            ))}
          </BoardTableContainer>
        </BoardContainer>
      </CommunityContainer>
      <LinkToEdit />
    </>
  );
}

export default Recruitment;
