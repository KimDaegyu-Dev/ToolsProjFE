import Link from 'next/Link';
import { TextSpan } from '../../src/fonts/font.styled';
import { LinkToEditContainer, RoundLinkToEdit } from './LinkToEdit.styled';

export default function LinkToEdit({ boardType }) {
  return (
    <LinkToEditContainer>
      <Link href={`/board/edit?boardType=${boardType}`}>
        <RoundLinkToEdit>
          <TextSpan variant={'Body3'} color={'white'}>
            글쓰기
          </TextSpan>
        </RoundLinkToEdit>
      </Link>
    </LinkToEditContainer>
  );
}
