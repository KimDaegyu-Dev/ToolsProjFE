import { TextSpan } from '../../src/fonts/font.styled';
import {
  BoardDateHead,
  BoardHead,
  BoardIndexHead,
  BoardTitleHead,
  BoardViewHead,
} from './BoardHeader.styled';

function BoardHeader() {
  return (
    <BoardHead>
      <BoardIndexHead>
        <TextSpan variant={'Body2'}>번호</TextSpan>
      </BoardIndexHead>
      <BoardTitleHead>
        <TextSpan variant={'Body2'}>제목</TextSpan>
      </BoardTitleHead>
      <BoardDateHead>
        <TextSpan variant={'Body2'}>등록일</TextSpan>
      </BoardDateHead>
      <BoardViewHead>
        <TextSpan variant={'Body2'}>조회</TextSpan>
      </BoardViewHead>
    </BoardHead>
  );
}

export default BoardHeader;
