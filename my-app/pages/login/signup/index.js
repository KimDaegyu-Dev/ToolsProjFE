import axios from 'axios';
import Link from 'next/Link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';
import Header from '../../../components/Header/Header';
import {
  InputBlock,
  InputItem,
  LoginBlock,
  LoginButton,
  LoginInput,
  LoginLogo,
} from '../../../components/Login/Login.styled';
import { TextSpan } from '../../../src/fonts/font.styled';

const SignUp = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [cookies, setCookies] = useCookies(['userInfo']);
  const router = useRouter();

  const idInputHandler = useCallback((e) => {
    setId(e.currentTarget.value);
  }, []);
  const nameInputHandler = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);
  const passwordInputHandler = useCallback((e) => {
    setPassword(e.currentTarget.value);
  }, []);
  const passwordCheckInputHandler = useCallback((e) => {
    setPasswordCheck(e.currentTarget.value);
  }, []);

  const submitHandler = useCallback(() => {
    if (!id) {
      alert('학번을 입력해주세요');
      return;
    }
    if (name === '') {
      alert('이름을 입력해주세요');
      return;
    }
    if (password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    axios
      .post(
        'http://localhost:8080/auth/signup',
        {
          id: id,
          name: name,
          password: password,
        },
        { withCredentials: true },
      )
      .then((res) => {
        if (res.status === 200) {
          setCookies('userInfo', res.data);
          alert('회원가입 되었습니다.');
          router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.errorCode === 'NO_AUTHORIZED') {
          alert('툴스 회원만 가입할 수 있습니다.');
          router.reload();
        } else if (err.response.data.errorCode === 'DUPLICATED') {
          alert('이미 가입된 회원입니다.');
          router.reload();
        } else {
          alert('회원가입에 실패하였습니다.');
          router.reload();
        }
      });
  }, [id, name, password, passwordCheck]);

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
              placeholder="학번"
              type="text"
              onChange={idInputHandler}
            />
          </LoginInput>
          <LoginInput>
            <Image
              src={'/img/signin_name.svg'}
              alt="login"
              width={38}
              height={38}
            />
            <InputItem
              placeholder="이름"
              type="text"
              onChange={nameInputHandler}
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
              onChange={passwordInputHandler}
            />
          </LoginInput>
          <LoginInput>
            <Image
              src={'/img/signin_pwcheck.svg'}
              alt="login"
              width={38}
              height={38}
            />
            <InputItem
              placeholder="비밀번호 확인"
              type="password"
              onChange={passwordCheckInputHandler}
            />
          </LoginInput>
          <LoginButton onClick={submitHandler}>
            <TextSpan variant={'Body2'} color="#fff">
              회원가입
            </TextSpan>
          </LoginButton>
        </InputBlock>
      </LoginBlock>
    </>
  );
};

export default SignUp;
