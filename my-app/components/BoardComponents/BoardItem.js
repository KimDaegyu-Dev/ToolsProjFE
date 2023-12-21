import { useRouter } from 'next/router';
import { TextSpan } from '../../src/fonts/font.styled';
import {
  BoardDateTable,
  BoardIndexTable,
  BoardItemTable,
  BoardTableRowContainer,
  BoardTitleIndexNoticeTableText,
  BoardTitleIndexTableText,
  BoardTitleTable,
  BoardViewTable,
} from './BoardItem.styled';

export function BoardItem({ board, boardType }) {
  const router = useRouter();

  return (
    <TextSpan font={'Regular'}>
      <BoardTableRowContainer
        href={{
          pathname: `/board/view/${board.id}`,
          query: {
            boardType: boardType,
          },
        }}
      >
        <BoardItemTable>
          <BoardIndexTable>
            <BoardTitleIndexTableText>
              {board.isNotice ? (
                <BoardTitleIndexNoticeTableText>
                  공지
                </BoardTitleIndexNoticeTableText>
              ) : (
                <>{board.id}</>
              )}
            </BoardTitleIndexTableText>
          </BoardIndexTable>
          <BoardTitleTable>
            <TextSpan variant={'Body7'}>{board.title}</TextSpan>
          </BoardTitleTable>
          <BoardDateTable>
            <TextSpan variant={'Body3'}>
              {new Date(board.postedAt).toLocaleDateString()}
            </TextSpan>
          </BoardDateTable>
          <BoardViewTable>
            <TextSpan variant={'Body3'}>{board.view}</TextSpan>
          </BoardViewTable>
        </BoardItemTable>
      </BoardTableRowContainer>
    </TextSpan>
  );
}
