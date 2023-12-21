import axios from 'axios';
import Link from 'next/Link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { TextSpan } from '../../src/fonts/font.styled';
import { HeaderContainer, HeaderImg, HeaderItems } from './MainHeader.styled';

function MainHeader() {
  const [cookies, , removeCookies] = useCookies(['userInfo']);
  const router = useRouter();
  const [show, setShow] = useState(false);

  var changeFontColor = show ? `black` : `#ffe9b1`;
  const loginHandler = () => {
    if (cookies.userInfo) {
      if (window.confirm('로그아웃하시겠습니까?')) {
        axios
          .get('http://localhost:8080/auth/logout', { withCredentials: true })
          .then((res) => {
            if (res.status === 200) {
              removeCookies('userInfo');
              alert('로그아웃 되었습니다.');
              router.reload();
            }
          })
          .catch((err) => console.log(err));
      }
    } else {
      router.push('/login');
    }
  };
  //스크롤시 헤더 변경
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShow(true);
        console.log(1);
      } else {
        setShow(false);
      }
    });
    return () => {
      /* Nav 컴포넌트를 사용하지 않을 시, 불필요한 이벤트를 제거해줌 */
      window.removeEventListener('scroll', () => { });
      show;
    };
  }, []);

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
    <HeaderContainer show={show}>
      <HeaderImg>
        <Link
          href={'/'}
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          <Image src={'/img/HeaderLogo.png'} width={120} height={85} alt='header' />
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
              color: show ? `black` : `#ffe9b1`,
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
              color: show ? `black` : `#ffe9b1`,
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
              color: show ? `black` : `#ffe9b1`,
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
              cursor: 'pointer',
              color: show ? `black` : `#ffe9b1`,
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

export default MainHeader;
