import axios from 'axios';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import MainHeader from '../components/Header/MainHeader';
import Content from '../components/MainPage/Content/Content';
import {
  BannerLogin,
  BannerLoginBtn,
  BannerSub,
  BannerTitle,
  Container,
  ContentContainer,
  ContentTitle,
} from '../components/MainPage/MainPage.styled';
import Circles from '../components/MainPage/circle/circles';
import { TextSpan } from '../src/fonts/font.styled';

function Main() {
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
              router.reload();
            }
          })
          .catch((err) => console.log(err));
      }
    } else {
      router.push('login');
    }
  };

  return (
    <>
      <Container>
        <MainHeader />
        <Circles />
        <TextSpan variant={'Title'}>
          <BannerTitle>TOOLS</BannerTitle>
        </TextSpan>
        <TextSpan variant={'Body1'}>
          <BannerSub>
            Total Object Oriented
            <br />
            Language Study
          </BannerSub>
        </TextSpan>

        <BannerLoginBtn onClick={loginHandler}>
          <BannerLogin>{cookies.userInfo ? '로그아웃' : '로그인'}</BannerLogin>
        </BannerLoginBtn>
        <ContentContainer>
          <ContentTitle>
            <TextSpan variant={'Body1'}>Project</TextSpan>
          </ContentTitle>

          <Content
            name="TRIP POCKET"
            leader="황지연" />
          <Content
            name="동그램"
            leader="이태호" />
          <Content
            name="Trablog"
            leader="박민영" />
          <Content
            name="언리얼 게임개발"
            leader="안병헌" />
          <Content
            img="/img/JuruMarbleLogo.svg"
            name="주루마블"
            leader="장희상"
            content="커스텀 주루마블 제작"
          />
          <Content
            img="/img/TeapotLogo.svg"
            name="툴스 홈페이지 제작"
            leader="이소윤"
            content="툴스 홈페이지 제작"
          />
          <Content
            img="/img/GameLogo.svg"
            name="이지스"
            leader="최명후"
            content="게임 제작"
          />
          <Content
            name="코드모스"
            leader="정민창" />
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            <TextSpan variant={'Body1'}>Study</TextSpan>
          </ContentTitle>
          <Content
            img="/img/CLogo.svg"
            name="C언어 스터디"
            content={
              '스터디 주제 : C언어 학습 및 복습\n스터디 목표 : C언어 기초를 함양하여 프로그래밍 언어에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초 문법부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/DataStructure_Logo.png"
            name="자료구조 스터디"
            content={
              '스터디 주제 : 자료구조 학습 및 복습\n스터디 목표 : 자료구조에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초 자료구조부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/Algorithm_Logo.png"
            name="알고리즘 스터디"
            content={
              '스터디 주제 : 알고리즘 학습 및 복습\n스터디 목표 : 알고리즘에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초 알고리즘부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/ReactLogo.svg"
            name="React 스터디"
            content={
              '스터디 주제 : React 학습 및 복습\n스터디 목표 : React공부를 통해 웹개발에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : HTML과 css문법을 튜터의 강의를 통해 학습한 후, 강의 내용을 바탕으로 직접 실습을 진행하며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/JavaLogo.svg"
            name="Java 스터디"
            content={
              '스터디 주제 : Java 학습 및 복습\n스터디 목표 : Java에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초 문법부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/Ai_Icon.svg"
            name="인공지능 스터디"
            content={
              '스터디 주제 : 인공지능에 대해 학습 및 복습\n스터디 목표 : 인공지능에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/TypescriptLogo.svg"
            name="백엔드 스터디"
            content={
              '스터디 주제 : Typescript 학습 및 복습\n스터디 목표 : 백엔드에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초 개념부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
          <Content
            img="/img/UnrealLogo.svg"
            name="언리얼 스터디"
            content={
              '스터디 주제 : Unreal 학습 및 복습\n스터디 목표 : Unreal 공부를 통해 웹개발에 대한 이해 증진 \n 스터디 일정 : 주 1회\n커리큘럼 : 기초부터 튜터가 강의를 진행하고, 질문을 받으며 스터디를 진행할 예정'
            }
          />
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            <TextSpan variant={'Body1'}>Tech Seminar</TextSpan>
          </ContentTitle>
          <Content
            img="/img/Algorithm_Icon.svg"
            name="알고리즘"
            leader="정민창"
            content={
              '1. 알고리즘이란 \n2. 필요성 \n3. 알고리즘 주제들 \n4. 공부방법 '
            }
          />
          <Content
            img="/img/ChatgptLogo.svg"
            name="Chat GPT 잘 쓰는 법"
            leader="조영효"
            content={'보다 더 나은 퀄리티의 답변을 얻기 위한 여러가지 방법'}
          />
          <Content
            img="/img/Frontend_Icon.svg"
            name="Front-end"
            leader="윤재웅"
            content={
              '1. 프론트엔드란? \n2. 프론트엔드가 하는 일 \n3. 프론트엔드 개발자는 누구와 협업하나요? \n4. 프론트엔드 개발자는 어떤 역량을 가지고 있어야 하나요? \n5. 어떤 성향을 가지고 있으면 프론트엔드 개발자 직무와 잘 맞을까요?'
            }
          />
          <Content
            img="/img/GithubLogo.svg"
            name="Git, Github?"
            leader="조동영"
            content={
              '1. Git이란? \n2. GIT vs SUBVERSION \n3. Github \n4.Github 작동방식 \n5. Branch \n6.Github Desktop'
            }
          />
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>
            <TextSpan variant={'Body1'}>Graduate Seminar</TextSpan>
          </ContentTitle>
          <Content
            img="/img/ComputerEngineering_Icon.svg"
            name="'컴퓨터공학과 출신'만이 가질 수 있는 경쟁력"
            leader="김민경"
            content={
              '누구나 개발자가 될 수 있는 세상에서 컴퓨터공학과 출신만이 가질 수 있는 경쟁력에 대하여'
            }
          />
          <Content
            img="/img/CLO_Logo.svg"
            name="Development Culture in CLO"
            leader="안홍현"
            content="현장에서 의사소통 하는 방법과 사용하는 도구들, git을 어떻게 사용하는지, 배포절차 등등"
          />
          <Content
            img="/img/DGB_Logo.svg"
            name="IMBANKER"
            leader="이민하"
            content="은행 전산 업무 소개 및 금융권 취업 준비"
          />
        </ContentContainer>
      </Container>
      {/* <Home /> */}
    </>
  );
}

export default Main;
