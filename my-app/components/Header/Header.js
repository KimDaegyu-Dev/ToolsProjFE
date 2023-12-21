import axios from 'axios';
import Link from 'next/Link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import { TextSpan } from '../../src/fonts/font.styled';
import { HeaderContainer, HeaderImg, HeaderItems } from './Header.styled';

function Header() {
  const [cookies, , removeCookies] = useCookies(['userInfo']);
  const router = useRouter();

  const loginHandler = () => {
    if (cookies.userInfo) {
      if (window.confirm('로그아웃하시겠습니까?')) {
        axios
          .get('http://localhost:8080/auth/logout', { withCredentials: true })
          .then((res) => {
            if (res.status === 200) {
              removeCookies('userInfo');
              alert('로그아웃 되었습니다.');
              router.push('/');
            }
          })
          .catch((err) => console.log(err));
      }
    } else {
      router.push('/login');
    }
  };

  const isLoginHandler = useCallback(
    (boardType) => {
      if (!cookies.userInfo) {
        alert('로그인 해주세요.');
        router.push('/login');
      } else {
        router.push(`/board/list/${boardType}`);
      }
    },
    [cookies],
  );

  return (
    <HeaderContainer>
      <HeaderImg>
        <Link
          href={'/'}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <Image
            src={'/img/HeaderLogo.png'}
            alt="header"
            width={120}
            height={85}
          />
        </Link>
      </HeaderImg>
      <HeaderItems>
        <TextSpan
          variant={'Body2'}
          onClick={() => isLoginHandler('recruitment')}
        >
          <div
            style={{
              textDecoration: 'none',
              color: `black`,
              cursor: 'pointer',
            }}
          >
            모집
          </div>
        </TextSpan>
        <TextSpan variant={'Body2'} onClick={() => isLoginHandler('notice')}>
          <div
            style={{
              textDecoration: 'none',
              color: `black`,
              cursor: 'pointer',
            }}
          >
            공지
          </div>
        </TextSpan>
        <TextSpan variant={'Body2'} onClick={() => isLoginHandler('free')}>
          <div
            style={{
              textDecoration: 'none',
              color: `black`,
              cursor: 'pointer',
            }}
          >
            게시판
          </div>
        </TextSpan>
        <TextSpan variant={'Body2'}>
          <div
            style={{
              textDecoration: 'none',
              color: 'black',
              cursor: 'pointer',
            }}
            onClick={loginHandler}
          >
            {cookies.userInfo ? '로그아웃' : '로그인'}
          </div>
        </TextSpan>
      </HeaderItems>
    </HeaderContainer>
  );
}

export default Header;
