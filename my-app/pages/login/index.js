import axios from 'axios';
import Link from 'next/Link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Header from '../../components/Header/Header';
import Checkbox from '../../components/Login/CheckBox';
import {
  InputBlock,
  InputItem,
  LoginBlock,
  LoginButton,
  LoginInput,
  LoginLogo,
  LoginSection,
  Notice,
  SignIn,
  StayLoginBlock,
} from '../../components/Login/Login.styled';
import { TextSpan } from '../../src/fonts/font.styled';

const Login = () => {
  const [isChecked, setIsChecked] = useState();
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookies] = useCookies(['userInfo']);
  const router = useRouter();

  const onClickCheckedHandler = useCallback(() => {
    setIsChecked(!isChecked);
  }, [isChecked]);

  useEffect(() => {
    setId(localStorage.USER_ID);
    setIsChecked(localStorage.USER_ID_CHECKED);
  }, []);

  const idInputHandler = useCallback((e) => {
    setId(e.currentTarget.value);
  }, []);
  const passwordInputHandler = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);
  const submitHandler = useCallback(() => {
    //아이디 저장 로그인 체크박스 누를시 세션스토리지에 저장
    localStorage.setItem('USER_ID_CHECKED', isChecked);
    if (isChecked) {
      if (id != undefined) {
        localStorage.setItem('USER_ID', id);
      } else {
        localStorage.setItem('USER_ID', '');
      }
    } else {
      localStorage.removeItem('USER_ID', id);
      localStorage.removeItem('USER_ID_CHECKED', isChecked);
    }
    axios
      .post(
        'http://localhost:8080/auth/login',
        {
          id: id,
          password: password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          setCookies('userInfo', res.data);
          alert('로그인 되었습니다.');
          router.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data.errorMsg === '일치하지 않는 회원 정보입니다.') {
          alert('일치하지 않는 회원 정보입니다.');
          router.reload();
        } else {
          alert('로그인에 실패하였습니다.');
          router.reload();
        }
      });
  }, [id, password, isChecked, localStorage]);

  return (
    <>
      <Header />
      <LoginBlock>
        <LoginLogo>
          <Link href={`/`}>
            <Image
              src={'/img/logo.svg'}
              alt="logo"
              width={235.512}
              height={160.966}
            />
          </Link>
        </LoginLogo>
        <InputBlock>
          <LoginInput>
            <Image
              src={'/img/login_id.svg'}
              alt="login"
              width={38}
              height={38}
            />
            <InputItem
              value={id || ''}
              placeholder="학번"
              type="text"
              id="idInputForm"
              onChange={idInputHandler}
            />
          </LoginInput>
          <LoginInput>
            <Image
              src={'/img/login_pw.svg'}
              alt="login"
              width={38}
              height={38}
            />
            <InputItem
              placeholder="비밀번호"
              type="password"
              value={password || ''}
              onChange={passwordInputHandler}
            />
          </LoginInput>
          <LoginSection>
            <StayLoginBlock>
              <Checkbox
                checked={isChecked}
                onClick={onClickCheckedHandler}
                children={'아이디 저장'}
              />
            </StayLoginBlock>
            <Link
              href={`/login/signup`}
              style={{
                textDecoration: 'none',
              }}
            >
              <TextSpan variant={'Body3'} font={'Regular'} color="blue">
                회원가입
              </TextSpan>
            </Link>
          </LoginSection>
          <LoginButton onClick={submitHandler}>
            <TextSpan variant={'Body2'} color="#fff">
              로그인
            </TextSpan>
          </LoginButton>
          <Notice>*Tools 동아리 회원만 로그인 할 수 있습니다.</Notice>
        </InputBlock>
      </LoginBlock>
    </>
  );
};

export default Login;
